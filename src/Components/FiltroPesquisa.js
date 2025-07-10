import React from 'react';

const FiltroPesquisa = () => {
  return (
    <aside className="filtro-pesquisa">
      <h3>Filtro de pesquisa</h3>

      {[...Array(8)].map((_, i) => (
        <label key={`filtro${i}`}>
          <input type="checkbox" /> Informação aqui
        </label>
      ))}

      <h4>Faixa de preço</h4>
      <input type="range" min="0" max="1000" defaultValue="499" />

      <h4>Marcas</h4>
      {[...Array(6)].map((_, i) => (
        <label key={`marca${i}`}>
          <input type="checkbox" /> Informação aqui
        </label>
      ))}
    </aside>
  );
};

export default FiltroPesquisa;