import React, { useState } from 'react';

function BannerOfertas() {
  const [activeIndex, setActiveIndex] = useState(1); // O banner central
  const totalBanners = 4; // Número total de slides

  // Funções para navegar
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalBanners);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalBanners) % totalBanners);
  };

  // Função que retorna as classes ÚNICAS para cada slide
  const getSlideClassName = (index) => {
    const baseClass = 'manual-slide'; // Classe base, antigamente 'carousel-item'
    if (index === activeIndex) {
      return `${baseClass} is-active`; // Slide central, antigamente 'active'
    }
    if (index === (activeIndex - 1 + totalBanners) % totalBanners) {
      return `${baseClass} is-prev`; // Slide da esquerda, antigamente 'prev'
    }
    if (index === (activeIndex + 1) % totalBanners) {
      return `${baseClass} is-next`; // Slide da direita, antigamente 'next'
    }
    return baseClass;
  };

  return (
    // Container principal com novo nome
    <div className="manual-carousel-container">
      <div className="manual-carousel-wrapper">

        {/* --- BANNERS MANUAIS COM NOVAS CLASSES --- */}

        <div className={getSlideClassName(0)}>
          <a href="#link-1">
            <img src="https://i.imgur.com/kYnOylu.png" alt="Ofertas" />
          </a>
        </div>

        <div className={getSlideClassName(1)}>
          <a href="#link-2">
            <img src="https://i.imgur.com/8Qp2j2V.png" alt="Carrinho Cheio" />
          </a>
        </div>

        <div className={getSlideClassName(2)}>
          <a href="#link-3">
            <img src="https://i.imgur.com/s6pL1Ff.png" alt="Achocolatado" />
          </a>
        </div>
        
        <div className={getSlideClassName(3)}>
          <a href="#link-4">
            <img src="https://i.imgur.com/3D8j4jT.png" alt="Bebidas" />
          </a>
        </div>

      </div>

      {/* --- CONTROLES COM NOVO NOME --- */}
      <div className="manual-carousel-controls">
        <button onClick={goToPrev}>❮</button>
        <button onClick={goToNext}>❯</button>
      </div>
    </div>
  );
}

export default BannerOfertas;