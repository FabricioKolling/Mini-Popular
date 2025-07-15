import React from 'react'
import Banner from '../Components/Banner';
import BannerOfertas from '../Components/BannerOfertas';
import TxtHome from '../Components/TxtHome';
import { Link } from 'react-router-dom';
import ComprasImg from '../Img/ComprasImg.avif';
import OfertasImg from '../Img/OfertaImg.jpg';
import SobreImg from '../Img/SobreImg.avif';
import ContatoImg from '../Img/ContatoImg.jpg';


function Home() {

  return (
    <div>
        <Banner />
        <BannerOfertas/>
        <TxtHome />

        <div className='Conteiner-tps'>

          <div className='Box-tp'>
            <Link to="/produtos" className='p-0'>
              <img
                src={ComprasImg}
                className="Box-img"
                alt="Imagem de Compras"
              />
            </Link>
            <div className='Info-tp'>
              <h1>Compras</h1>
            </div>
          </div>

          <div className='Box-tp'>
            <Link to="/produtos" className='p-0'>
              <img
                src={OfertasImg}
                className="Box-img"
                alt="Imagem de Oferta"
              />
            </Link>
            <div className='Info-tp'>
              <h1>Ofertas</h1>
            </div>
          </div>

          <div className='Box-tp'>
            <Link to="/sobre" className='p-0'>
              <img
                src={SobreImg}
                className="Box-img"
                alt="Imagem de SobreNos"
              />
            </Link>
            <div className='Info-tp'>
              <h1>Mini Popular</h1>
            </div>
          </div>

          <div className='Box-tp'>
            <Link to="/contato" className='p-0'>
              <img
                src={ContatoImg}
                className="Box-img"
                alt="Imagem de Contato"
              />
            </Link>
            <div className='Info-tp'>
              <h1>Contato</h1>
            </div>
          </div>

        </div>
    </div>
  )

}

export default Home