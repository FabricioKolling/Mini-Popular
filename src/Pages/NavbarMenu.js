import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../Img/logo2.png';

import { FaSearch, FaMicrophone, FaUserCircle, FaFilm } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';

function NavbarMenu() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="top-navbar">
        <Container fluid className="d-flex justify-content-center">

          <div className="navbar-content-wrapper d-flex align-items-center justify-content-between flex-wrap w-100">


            <Navbar.Brand href="#home" className="p-0">
              <img
                src={Logo}
                className="logo"
                alt="Mini Popular Logo"
              />
            </Navbar.Brand>

            <div className="search-container flex-grow-1 mx-4">
              <FaSearch className="search-icon" />
              <Form.Control
                type="search"
                placeholder="Pesquise aqui..."
                className="search-input"
                aria-label="Search"
              />
              <FaMicrophone className="mic-icon" />
            </div>

            <Nav className="d-flex flex-row align-items-center">
              <Nav.Link href="#login" className="d-flex align-items-center me-3 login-section">
                <FaUserCircle size={35} className="login-icon" />
                <div className="login-text ms-2">
                  <span>Entre ou</span>
                  <span>Cadastre-se</span>
                </div>
              </Nav.Link>

              <Button variant="success" className="cart-button me-3">
                <BsFillBookmarkFill size={20} />
                <span className="ms-2">0</span> 
              </Button>

              <Nav.Link href="#roleta">
                <FaFilm size={40} className="roulette-icon" />
              </Nav.Link>
            </Nav>

          </div>
        </Container>
      </Navbar>

      <Navbar className="custom-navbar" variant="dark" expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#home" className='menu-item'>Home</Nav.Link>
                <Nav.Link href="#Sobre" className='menu-item'>Mini Popular</Nav.Link>
                <Nav.Link href="#produtos" className='menu-item'>Produtos</Nav.Link>
                <Nav.Link href="#contato" className='menu-item'>Contato</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>


    </>
  );
}

export default NavbarMenu;