import React, { useState } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaCompras from '../Components/ListaCompras';
import Logo from '../Img/logo2.png';
import { Link } from 'react-router-dom';
import RoletaModal from '../Components/RoletaModal';

import { FaSearch, FaMicrophone, FaUserCircle, FaFilm } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';

function NavbarMenu() {
  const [showCarrinho, setShowCarrinho] = useState(false);
  const [showRoleta, setShowRoleta] = useState(false);

  const abrirCarrinho = () => setShowCarrinho(true);
  const fecharCarrinho = () => setShowCarrinho(false);

  const abrirRoleta = () => setShowRoleta(true);
  const fecharRoleta = () => setShowRoleta(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="top-navbar">
        <Container fluid className="d-flex justify-content-center">
          <div className="navbar-content-wrapper d-flex align-items-center justify-content-between flex-wrap w-100">

            <Link to="/" className="p-0">
              <img
                src={Logo}
                className="d-inline-block align-top logo"
                alt="Logo Mini Popular"
              />
            </Link>

            <Form className="d-flex mx-auto search-container">
              <FaSearch className="search-icon me-2" />
              <Form.Control
                type="search"
                placeholder="Pesquise aqui..."
                className="search-input"
                aria-label="Pesquisar"
              />
              <FaMicrophone className="mic-icon ms-2" />
            </Form>

             <Nav className="d-flex flex-row align-items-center">
              <Nav.Link href="#login" className="d-flex align-items-center me-3 login-section">
                <FaUserCircle size={35} className="login-icon" />
                <div className="login-text ms-2">
                  <span>Entre ou</span>
                  <span>Cadastre-se</span>
                </div>
              </Nav.Link>

              <Button onClick={abrirCarrinho} variant="success" className="cart-button me-3">
                <BsFillBookmarkFill size={20} />
                <span className="ms-2">0</span> 
              </Button>

              <Button variant="link" onClick={abrirRoleta} className="roulette-icon p-0">
                <FaFilm size={28} />
              </Button>
            </Nav>

          </div>
        </Container>
      </Navbar>

      <Navbar className="custom-navbar" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className='menu-item'>Home</Link>
              <Link to="/sobre" className='menu-item'>Mini Popular</Link>
              <Link to="/produtos" className='menu-item'>Produtos</Link>
              <Link to="/contato" className='menu-item'>Contato</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ListaCompras show={showCarrinho} onHide={fecharCarrinho} />
      <RoletaModal isOpen={showRoleta} onClose={fecharRoleta} />
    </>
  );
}

export default NavbarMenu;