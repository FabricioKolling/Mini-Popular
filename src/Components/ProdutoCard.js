import React from 'react';

const IMAGEM_PRODUTO_PLACEHOLDER = 'https://via.placeholder.com/286x180?text=Foto+Produto';

function ProdutoCard(props) {
  return (
    <div className="cartao-produto">
      <div className="area-imagem-card">
        {props.emOferta && <span className="selo-oferta">Oferta</span>}
        <img
          src={props.urlImagem || IMAGEM_PRODUTO_PLACEHOLDER}
          alt={props.nome || "Produto"}
          className="imagem-card"
        />
        <button className="botao-adicionar">ADD +</button>
      </div>

      <div className="corpo-card">
        <h4 className="titulo-card">{props.nome}</h4>
        <p className="texto-card">{props.descricao}</p>
        <div className="area-preco-card">
          <span className="moeda-card">R$</span>
          <span className="preco-card">{props.preco}</span>
        </div>
      </div>
    </div>
  );
}

export default ProdutoCard;