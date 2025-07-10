import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import Logo from '../Img/MiniPopular3.png'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='RodapeTotal'> 
      <div className='Rodape'>
        {/* ---{Botões de tp}--- */}
        <div className='BotoesTp'>
          <div className='BotaoFooter'>
            <Link to="/" className='botao'>Home</Link>
          </div>
          <div className='BotaoFooter'>
            <Link to="/sobre" className='botao'>Sobre</Link>
          </div>
          <div className='BotaoFooter'>
            <Link to="/produtos" className='botao'>Produtos</Link>
          </div>
          <div className='BotaoFooter'>
            <Link to="/contato" className='botao'>Contato</Link>
          </div>
        </div>

        {/* ---{Restante do Rodapé}--- */}
        <div className='ContainesItens'>
          <div className="footer-coluna logo-coluna">
            <img src={Logo} alt="Logo da Empresa" className="footer-logo" />
          </div>

          <div className="footer-coluna endereco-coluna">
            <p>Rod. José Carlos Daux, 14680 - Vargem Pequena,</p>
            <p>Florianópolis - SC, 88052-401</p>
          </div>

          <div className="footer-coluna social-coluna">
            <h4>Contatos</h4>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaEnvelope /></a>
              <a href="#"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='BordaAbaixo'>
        <p>Todos os Direitos Reservados © 2000 - 3200 | Mini Popular | Website desenvolvido por: SENAI</p>
      </div>
    </footer>
  );
}

export default Footer;