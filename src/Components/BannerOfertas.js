import React, { useState } from 'react';

const imagens = [
  {
    src: 'https://img.cdndsgni.com/preview/10020281.jpg',
    alt: 'Banner Ofertas Supermercado',
  },
  {
    src: 'https://img.cdndsgni.com/preview/10028327-m.jpg',
    alt: 'Banner Carrinho Cheio',
  },
  {
    src: 'https://img.cdndsgni.com/preview/10079596.jpg',
    alt: 'Banner Produtos em Oferta',
  },
];

function BannerOfertas() {
  const [activeIndex, setActiveIndex] = useState(0);

  const irParaProximo = () => {
    const proximoIndex = (activeIndex + 1) % imagens.length;
    setActiveIndex(proximoIndex);
  };

  const irParaAnterior = () => {
    const anteriorIndex = (activeIndex - 1 + imagens.length) % imagens.length;
    setActiveIndex(anteriorIndex);
  };

  return (
    <section className="carrossel-secao">

      <div className="carrossel-container">
        {imagens.map((imagem, index) => {
          let classe = 'carrossel-item';
          if (index === activeIndex) {
            classe += ' active';
          } else if (index === (activeIndex - 1 + imagens.length) % imagens.length) {
            classe += ' prev';
          } else if (index === (activeIndex + 1) % imagens.length) {
            classe += ' next';
          }

          return (
            <div className={classe} key={index}>
              <img src={imagem.src} alt={imagem.alt} />
            </div>
          );
        })}
      </div>

      <div className="carrossel-controles">
        <button id="prev" onClick={irParaAnterior}>❮</button>
        <button id="next" onClick={irParaProximo}>❯</button>
      </div>

    </section>
  );
}

export default BannerOfertas;