import React from 'react';
import ProdutoCard from './ProdutoCard';

const ListaProdutos = ({ categorias }) => {
  return (
    <div className="lista-produtos">
      {categorias.map((categoria, i) => (
        <div className="categoria" key={i}>
          <h2>{categoria.titulo}</h2>
          <div className="linha-produtos">
            {categoria.produtos.map((produto, idx) => (
              <ProdutoCard
                key={idx}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                imagem={produto.imagem}
                destaque={produto.destaque}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaProdutos;