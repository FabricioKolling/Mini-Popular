import React from 'react';

const IMAGEM_PRODUTO_PLACEHOLDER = 'https://via.placeholder.com/286x180?text=Foto+Produto';

function ProdutoCard(props) {
  const temDesconto = props.emOferta;

  return (
    <div className="cartao-produto">
      <div className="area-imagem-card">
        {temDesconto && <span className="selo-oferta">15% Off</span>}
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