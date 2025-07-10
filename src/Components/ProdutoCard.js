import React from 'react';

const ProdutoCard = ({ nome, preco, descricao, imagem, destaque }) => {
  return (
    <div className="produto-card">
      {destaque && <span className="etiqueta">Oferta</span>}
      <div className="foto-produto">
        <img src={imagem} alt={nome} />
      </div>
      <h4>{nome}</h4>
      <p>{descricao}</p>
      <strong>R$ {preco.toFixed(2)}</strong>
      <button className="botao-adicionar">+ ADD</button>
    </div>
  );
};

export default ProdutoCard;