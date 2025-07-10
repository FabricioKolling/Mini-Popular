import React, { useState } from 'react';

const banners = [
  {
    titulo: 'Mini churrasqueira elétrica',
    descricao: 'A melhor churrasqueira, para a menor casa. Use em qualquer lugar e ambiente!',
    preco: 499.99,
    imagemPrincipal: 'https://via.placeholder.com/250?text=Churrasqueira',
    imagemOferta: 'https://via.placeholder.com/70?text=Oferta+01'
  },
  {
    titulo: 'Liquidificador Turbo Pro',
    descricao: 'Alta potência, ideal para sucos e vitaminas.',
    preco: 219.99,
    imagemPrincipal: 'https://via.placeholder.com/250?text=Liquidificador',
    imagemOferta: 'https://via.placeholder.com/70?text=Oferta+02'
  },
  {
    titulo: 'Conjunto de Panelas Antiaderente',
    descricao: 'Cozinhe sem grudar e sem estresse.',
    preco: 349.99,
    imagemPrincipal: 'https://via.placeholder.com/250?text=Panelas',
    imagemOferta: 'https://via.placeholder.com/70?text=Oferta+03'
  }
];

const BannerPromocao = () => {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  const handleCliqueOferta = (index) => {
    setIndiceAtivo(index);
  };

  const bannerAtual = banners[indiceAtivo];

  return (
    <section className="banner-promocao">
      <div className="banner-principal">
        <img src={bannerAtual.imagemPrincipal} alt={bannerAtual.titulo} />
        <div className="texto-banner">
          <span className="destaque">Em PROMOÇÃO!</span>
          <h2>{bannerAtual.titulo}</h2>
          <p>{bannerAtual.descricao}</p>
          <h3>Por apenas <span className="preco">R$ {bannerAtual.preco.toFixed(2)}</span></h3>
        </div>
      </div>

      <div className="ofertas-laterais">
        {banners.map((banner, index) => (
          <button
            key={index}
            className={`oferta ${index === indiceAtivo ? 'ativa' : ''}`}
            onClick={() => handleCliqueOferta(index)}
            aria-label={`Oferta ${index + 1}`}
            type="button"
          >
            <img src={banner.imagemOferta} alt={`Oferta ${index + 1}`} />
            {`Oferta 0${index + 1}`}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BannerPromocao;