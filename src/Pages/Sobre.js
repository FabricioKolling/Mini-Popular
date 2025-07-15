import React from 'react'
import Banner from '../Components/Banner'
import Image from 'react-bootstrap/Image';
import BannerSobre from '../Img/BannerSobre.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImgSobre from '../Img/FotoLoja.jpg'

function Sobre() {
  return (
    <div>
      <Banner/>

      <div className='Sobre-nos'>
        <Container>
          <Row className="align-items-center justify-content-center g-4">
            <Col xs={12} md={6} className='order-2 order-md-1'>
              <div className='Sobre-txt'>
                <h1>Mini Popular</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tortor feugiat, accumsan risus nec, efficitur lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce erat lectus, maximus at metus id, aliquam imperdiet neque. Maecenas nec maximus leo. Maecenas vestibulum efficitur interdum. Integer orci magna, elementum at arcu nec, vulputate pulvinar justo. Aliquam a eros sem. Maecenas nec maximus leo. Maecenas vestibulum efficitur interdum. Integer orci magna, elementum at arcu nec.</p>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-center order-1 order-md-2">
              <Image className='Sobre-Img' src={ImgSobre}/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='Sobre-banner'>
        <Image src={BannerSobre} fluid />
      </div>
    </div>
  )
}

export default Sobre
