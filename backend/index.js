require('dotenv').config(); // Garanta que esta é a primeira linha!

const express = require('express');
const cors = require('cors');
const db = require('./db.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// --- CONSTANTES DA ROLETA ---
const CATEGORIAS_ROLETA = ['PADARIA', 'CARNES E FRIOS', 'HORTIFRÚTI', 'LATICÍNIOS E CEREAIS', 'BEBIDAS', 'CONGELADOS'];
const DESCONTO_PERCENTUAL = 15;
const DURACAO_DESCONTO_HORAS = 4;
const COOLDOWN_ROLETA_HORAS = 1.00;

// --- ROTAS DA API ---

app.get('/api/produtos', async (req, res) => {
  const clientID = req.headers['x-client-id'];
  try {
    const produtosResult = await db.query('SELECT id, nome, descricao, preco, categoria, url_imagem FROM produtos ORDER BY categoria, id');
    let produtos = produtosResult.rows;

    if (clientID) {
      const descontoResult = await db.query(
        'SELECT * FROM descontos_ativos_anonimos WHERE client_id = $1 AND data_expiracao > NOW() LIMIT 1',
        [clientID]
      );

      if (descontoResult.rows.length > 0) {
        const desconto = descontoResult.rows[0];
        produtos = produtos.map(p => {
          if (p.categoria && p.categoria.toUpperCase() === desconto.categoria_desconto.toUpperCase()) {
            return {
              ...p,
              preco_original: parseFloat(p.preco).toFixed(2),
              preco: (parseFloat(p.preco) * (1 - desconto.percentual_desconto / 100)).toFixed(2),
              emOferta: true
            };
          }
          return p;
        });
      }
    }
    res.status(200).json(produtos);
  } catch (err) {
    console.error("Erro ao buscar produtos:", err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// ROTA COM A CORREÇÃO NO CÁLCULO DO TEMPO
app.get('/api/roleta/status', async (req, res) => {
  const clientID = req.headers['x-client-id'];
  if (!clientID) {
    return res.status(400).json({ error: 'Client ID não fornecido' });
  }

  try {
    const result = await db.query('SELECT ultimo_giro_roleta FROM clientes_anonimos WHERE client_id = $1', [clientID]);

    if (result.rows.length === 0) {
      return res.json({ pode_girar: true });
    }

    const ultimoGiro = new Date(result.rows[0].ultimo_giro_roleta);
    // CÁLCULO CORRIGIDO AQUI
    const proximoGiro = new Date(ultimoGiro.getTime() + (COOLDOWN_ROLETA_HORAS * 60 * 60 * 1000));
    
    if (new Date() >= proximoGiro) {
      res.json({ pode_girar: true });
    } else {
      res.json({ pode_girar: false, proximo_giro_disponivel_em: proximoGiro.toISOString() });
    }
  } catch (err) {
    console.error("Erro ao verificar status da roleta:", err);
    res.status(500).json({ error: 'Erro ao verificar status da roleta' });
  }
});


// --- LÓGICA DA ROLETA REATORADA ---

// POST /api/roleta/girar -> Apenas verifica o cooldown e SORTEIA um prêmio
app.post('/api/roleta/girar', async (req, res) => {
  const clientID = req.headers['x-client-id'];
  if (!clientID) {
    return res.status(400).json({ error: 'Client ID não fornecido' });
  }

  try {
    const statusResult = await db.query('SELECT ultimo_giro_roleta FROM clientes_anonimos WHERE client_id = $1', [clientID]);
    if (statusResult.rows.length > 0) {
        const ultimoGiro = new Date(statusResult.rows[0].ultimo_giro_roleta);
        // CÁLCULO CORRIGIDO AQUI TAMBÉM
        if (new Date().getTime() - ultimoGiro.getTime() < (COOLDOWN_ROLETA_HORAS * 60 * 60 * 1000)) {
            return res.status(429).json({ error: 'Você já girou a roleta recentemente.' });
        }
    }
    
    // Apenas sorteia e retorna, não salva nada no banco ainda.
    const indiceSorteado = Math.floor(Math.random() * CATEGORIAS_ROLETA.length);
    const categoriaSorteada = CATEGORIAS_ROLETA[indiceSorteado];
    
    res.json({ categoria_premiada: categoriaSorteada });

  } catch (e) {
    console.error("Erro ao verificar o giro da roleta", e);
    res.status(500).json({ error: 'Erro ao processar a verificação do giro' });
  }
});

// NOVA ROTA PATCH -> Ativa o desconto e o cooldown APÓS o giro no frontend
app.patch('/api/roleta/ativar-desconto', async (req, res) => {
  const clientID = req.headers['x-client-id'];
  const { categoria } = req.body; // Recebe a categoria do frontend

  if (!clientID || !categoria) {
    return res.status(400).json({ error: 'Client ID ou categoria não fornecidos' });
  }

  const client = await db.pool.connect();
  try {
    await client.query('BEGIN');
    
    const dataExpiracao = new Date(new Date().getTime() + (DURACAO_DESCONTO_HORAS * 60 * 60 * 1000));

    // 1. Limpa qualquer desconto antigo que o usuário possa ter
    await client.query('DELETE FROM descontos_ativos_anonimos WHERE client_id = $1', [clientID]);
    
    // 2. Insere o novo desconto
    await client.query(
      'INSERT INTO descontos_ativos_anonimos (client_id, categoria_desconto, percentual_desconto, data_expiracao) VALUES ($1, $2, $3, $4)',
      [clientID, categoria, DESCONTO_PERCENTUAL, dataExpiracao]
    );

    // 3. Atualiza o tempo do último giro (inicia o cooldown)
    await client.query(
      `INSERT INTO clientes_anonimos (client_id, ultimo_giro_roleta)
       VALUES ($1, NOW())
       ON CONFLICT (client_id)
       DO UPDATE SET ultimo_giro_roleta = NOW();`,
      [clientID]
    );

    await client.query('COMMIT');
    res.status(200).json({ message: 'Desconto ativado com sucesso!' });

  } catch (e) {
    await client.query('ROLLBACK');
    console.error("Erro ao ativar o desconto", e);
    res.status(500).json({ error: 'Erro ao ativar o desconto' });
  } finally {
    client.release();
  }
});


// --- NOVA ROTA DELETE ---
app.delete('/api/desconto', async (req, res) => {
    const clientID = req.headers['x-client-id'];
    if (!clientID) {
        return res.status(400).json({ error: 'Client ID não fornecido' });
    }

    try {
        const result = await db.query('DELETE FROM descontos_ativos_anonimos WHERE client_id = $1', [clientID]);
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Desconto removido com sucesso.' });
        } else {
            res.status(404).json({ message: 'Nenhum desconto ativo encontrado para remover.' });
        }
    } catch (err) {
        console.error("Erro ao remover desconto:", err);
        res.status(500).json({ error: 'Erro interno do servidor ao remover desconto.' });
    }
});


// Inicia o servidor para escutar na porta definida
app.listen(port, () => {
  console.log(`Servidor back-end rodando na porta ${port}`);
});