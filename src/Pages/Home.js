import React from 'react'
import Banner from '../Components/Banner';
import BannerOferta from '../Components/BannerOfertas'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {

  return (
    <div>
        <Banner />
        <BannerOferta/>
    </div>
  )

}

export default Home