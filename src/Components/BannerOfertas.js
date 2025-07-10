import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import slide1 from '../Img/BannerApp.png';
import slide2 from '../Img/BannerApp.png';
import slide3 from '../Img/BannerApp.png';
import slide4 from '../Img/BannerApp.png';

// Componentes de seta devem vir ANTES de serem usados no settings
const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-left" onClick={onClick}>
    <FaChevronLeft size={30} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-right" onClick={onClick}>
    <FaChevronRight size={30} />
  </div>
);

function CarrosselDeOfertas() {
  const settings = {
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    infinite: true,
    speed: 600,
    arrows: true,
    autoplay: false,
    cssEase: 'ease-in-out',
    swipe: false,
    draggable: false,
    touchMove: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '0px',
        },
      },
    ],
  };

  const slides = [slide1, slide2, slide3, slide4];

  return (
    <div className="carrossel-container">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div className="slide-wrapper" key={idx}>
            <img src={slide} alt={`Slide ${idx + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarrosselDeOfertas;
