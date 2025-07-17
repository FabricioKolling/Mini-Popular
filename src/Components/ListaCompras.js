import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


export default function ListaCompras({ show, onHide }) {


  const [quantidade1, setQuantidade1] = useState(1);
  const [comprado1, setComprado1] = useState(false);

  const [quantidade2, setQuantidade2] = useState(2); 
  const [comprado2, setComprado2] = useState(true); 

  const [quantidade3, setQuantidade3] = useState(1);
  const [comprado3, setComprado3] = useState(false);

  return (
    <Offcanvas show={show} onHide={onHide} placement="end" scroll backdrop={false}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Lista de compras:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div
          className={`produto-card d-flex ${comprado1 ? 'comprado' : ''}`}
          onClick={() => setComprado1(!comprado1)}
        >
          <div className="produto-foto">Foto do produto</div>
          <div className="produto-dados flex-grow-1">
            <div className="produto-nome">Produto 1</div>
            <div className="produto-desc">Aqui é onde ficaria a descrição do produto irá ficar, entendeu?</div>
          </div>
          <div className="produto-controles">
            <div className="quantidade-label">Quant.</div>
            <div className="quantidade-controle">
              <Button size="sm" variant="danger" onClick={(e) => { e.stopPropagation(); setQuantidade1(q => Math.max(1, q - 1)); }}>-</Button>
              <span className="quantidade-numero">{String(quantidade1).padStart(2, '0')}</span>
              <Button size="sm" variant="success" onClick={(e) => { e.stopPropagation(); setQuantidade1(q => q + 1); }}>+</Button>
            </div>
            <div className="acoes">
              <Button variant="outline-dark" size="sm" onClick={(e) => e.stopPropagation()}></Button>
            </div>
          </div>
        </div>

        <div
          className={`produto-card d-flex ${comprado2 ? 'comprado' : ''}`}
          onClick={() => setComprado2(!comprado2)}
        >
          <div className="produto-foto">Foto do produto</div>
          <div className="produto-dados flex-grow-1">
            <div className="produto-nome">Produto 2</div>
            <div className="produto-desc">Aqui é onde ficaria a descrição do produto irá ficar, entendeu?</div>
          </div>
          <div className="produto-controles">
            <div className="quantidade-label">Quant.</div>
            <div className="quantidade-controle">
              <Button size="sm" variant="danger" onClick={(e) => { e.stopPropagation(); setQuantidade2(q => Math.max(1, q - 1)); }}>-</Button>
              <span className="quantidade-numero">{String(quantidade2).padStart(2, '0')}</span>
              <Button size="sm" variant="success" onClick={(e) => { e.stopPropagation(); setQuantidade2(q => q + 1); }}>+</Button>
            </div>
            <div className="acoes">
              <Button variant="outline-dark" size="sm" onClick={(e) => e.stopPropagation()}></Button>
            </div>
          </div>
        </div>

        <div
          className={`produto-card d-flex ${comprado3 ? 'comprado' : ''}`}
          onClick={() => setComprado3(!comprado3)}
        >
          <div className="produto-foto">Foto do produto</div>
          <div className="produto-dados flex-grow-1">
            <div className="produto-nome">Produto 3</div>
            <div className="produto-desc">Aqui é onde ficaria a descrição do produto irá ficar, entendeu?</div>
          </div>
          <div className="produto-controles">
            <div className="quantidade-label">Quant.</div>
            <div className="quantidade-controle">
              <Button size="sm" variant="danger" onClick={(e) => { e.stopPropagation(); setQuantidade3(q => Math.max(1, q - 1)); }}>-</Button>
              <span className="quantidade-numero">{String(quantidade3).padStart(2, '0')}</span>
              <Button size="sm" variant="success" onClick={(e) => { e.stopPropagation(); setQuantidade3(q => q + 1); }}>+</Button>
            </div>
            <div className="acoes">
              <Button variant="outline-dark" size="sm" onClick={(e) => e.stopPropagation()}></Button>
            </div>
          </div>
        </div>

      </Offcanvas.Body>
      <div className="lista-compras-footer">
        <div className="total-container">
          <span className="total-label">Total a pagar</span>
          <span className="total-valor"><span className='Color-green'>R$</span> 5.000,75</span>
        </div>
        <Button className="redefinir-button">Redefinir</Button>
      </div>
    </Offcanvas>
  );
}
