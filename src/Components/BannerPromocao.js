import React from 'react';

const CHURRASQUEIRA_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLj-x9y9cHT464LayCf3zOmOcdMPytup7MQ&s';
const OMO_IMG = 'https://boa.vtexassets.com/arquivos/ids/567336/Lava-Roupas-em-Po-Lavagem-Perfeita-Omo-800g.jpg?v=638510002574800000';
const CANETA_IMG = 'https://ibassets.com.br/ib.item.image.big/b-9daf9d93eee1433dbc5e520db884f963.jpeg';

function BannerPromocao() {
  return (
    <div className='BannerContainer'>

      <div className='PromocaoPrincipal'>
        <img className='ImagemProduto' src={CHURRASQUEIRA_IMG} alt='Mini churrasqueira elétrica' />

        <div className='ConteudoInfo'>
          <span className='PromoBadge'>Em PROMOÇÃO!</span>

          <h3 className='NomeProduto'>Mini churrasqueira elétrica</h3>

          <p className='DescricaoProduto'>
            A melhor churrasqueira, para a menor casa, utilize em qualquer lugar e qualquer ambiente!
          </p>

          <div className='PrecoWrapper'>
            <span className='PorApenas'>Por apenas</span>
            <div className='PrecoTag'>
              R$ <strong>499,99</strong>
            </div>
          </div>
        </div>
      </div>

      <div className='ListaOfertas'>
        <div className='BotaoOferta'>
          <img src={OMO_IMG} alt='Oferta 1' className='MiniaturaOferta'/>
          <span className='NomeOferta'>Oferta 01</span>
        </div>

        <div className='BotaoOferta active'>
          <img src={CHURRASQUEIRA_IMG} alt='Oferta 2' className='MiniaturaOferta'/>
          <span className='NomeOferta'>Oferta 02</span>
        </div>

        <div className='BotaoOferta'>
          <img src={CANETA_IMG} alt='Oferta 3' className='MiniaturaOferta'/>
          <span className='NomeOferta'>Oferta 03</span>
        </div>
      </div>

    </div>
  );
}

export default BannerPromocao;