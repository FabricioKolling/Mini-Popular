import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import Logo from '../img/Mini Popular (3).png';

function Footer() {
  return (
    <footer className='RodapeTotal'> 
      <div className='Rodape'>
        {/* ---{Botões de tp}--- */}
        <div className='BotoesTp'>
          <div className='BotaoFooter'>
            <button className='botao'>Home</button>
          </div>
          <div className='BotaoFooter'>
            <button className='botao'>Sobre</button>
          </div>
          <div className='BotaoFooter'>
            <button className='botao'>Produtos</button>
          </div>
          <div className='BotaoFooter'>
            <button className='botao'>Contato</button>
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