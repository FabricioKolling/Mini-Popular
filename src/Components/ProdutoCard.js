import React from 'react';
import api from '../api';

const IMAGEM_PRODUTO_PLACEHOLDER = 'https://via.placeholder.com/286x180?text=Foto+Produto';

function ProdutoCard({ onDescontoRemovido, ...props }) {
  const temDesconto = props.emOferta;

  const handleRemoverDesconto = async (e) => {
    // Impede que outros eventos de clique (como o do card inteiro) sejam acionados
    e.stopPropagation(); 
    
    if (window.confirm('Tem certeza que deseja remover este desconto?')) {
      try {
        await api.delete('/desconto');
        alert('Desconto removido!');
        
        // Chama a função passada pelo componente pai (Produtos.js) para atualizar a lista
        if (onDescontoRemovido) {
          onDescontoRemovido(); 
        }
      } catch (error) {
        console.error("Erro ao remover o desconto", error);
        alert('Não foi possível remover o desconto.');
      }
    }
  };

  return (
    <div className="cartao-produto">
      <div className="area-imagem-card">
        {temDesconto && (
          <span 
            className="selo-oferta" 
            onClick={handleRemoverDesconto} 
            title="Clique para remover este desconto"
            style={{ cursor: 'pointer' }}
          >
            15% Off ⓧ
          </span>
        )}
        <img
          src={props.url_imagem || IMAGEM_PRODUTO_PLACEHOLDER}
          alt={props.nome || "Produto"}
          className="imagem-card"
        />
        <button className="botao-adicionar">ADD +</button>
      </div>

      <div className="corpo-card">
        <h4 className="titulo-card">{props.nome}</h4>
        <p className="texto-card">{props.descricao}</p>
        <div className="area-preco-card">
          {temDesconto ? (
            <>
              <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9rem', marginRight: '8px' }}>
                R$ {parseFloat(props.preco_original).toFixed(2)}
              </span>
              <span className="moeda-card">R$</span>
              <span className="preco-card">{parseFloat(props.preco).toFixed(2)}</span>
            </>
          ) : (
            <>
              <span className="moeda-card">R$</span>
              <span className="preco-card">{parseFloat(props.preco).toFixed(2)}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProdutoCard;