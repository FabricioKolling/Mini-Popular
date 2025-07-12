import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const produtos = [
  { id: 1, nome: 'Produto 1', descricao: 'Aqui é onde ficaria a descrição do produto irá ficar, entendeu?' },
  { id: 2, nome: 'Produto 2', descricao: 'Aqui é onde ficaria a descrição do produto irá ficar, entendeu?' },
  { id: 3, nome: 'Produto 3', descricao: 'Aqui é onde ficaria a descrição do produto irá ficar, entendeu?' },
];

export default function ListaCompras({ show, onHide }) {
  const [quantidades, setQuantidades] = useState(() =>
    produtos.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );
  const [comprados, setComprados] = useState({});

  const toggleComprado = (id) => {
    setComprados((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const mudarQuantidade = (id, delta) => {
    setQuantidades((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  return (
    <Offcanvas show={show} onHide={onHide} placement="end" scroll backdrop={false}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Lista de compras:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {produtos.map((produto) => {
          const comprado = comprados[produto.id];
          return (
            <div
              key={produto.id}
              className={`produto-card d-flex ${comprado ? 'comprado' : ''}`}
              onClick={() => toggleComprado(produto.id)}
            >
              <div className="produto-foto">Foto do produto</div>
              <div className="produto-dados flex-grow-1">
                <div className="produto-nome">{produto.nome}</div>
                <div className="produto-desc">{produto.descricao}</div>
              </div>
              <div className="produto-controles">
                <div className="quantidade-label">Quant.</div>
                <div className="quantidade-controle">
                  <Button size="sm" variant="danger" onClick={(e) => { e.stopPropagation(); mudarQuantidade(produto.id, -1); }}>-</Button>
                  <span className="quantidade-numero">{String(quantidades[produto.id]).padStart(2, '0')}</span>
                  <Button size="sm" variant="success" onClick={(e) => { e.stopPropagation(); mudarQuantidade(produto.id, 1); }}>+</Button>
                </div>
                <div className="acoes">
                  <Button variant="outline-dark" size="sm" onClick={(e) => e.stopPropagation()}>🗑</Button>
                </div>
              </div>
            </div>
          );
        })}
      </Offcanvas.Body>
    </Offcanvas>
  );
}