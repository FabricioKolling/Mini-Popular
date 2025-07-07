import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function NavbarMenu() {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='menu'>Home</Nav.Link>
            <Nav.Link href="#Sobre" className='menu'>Mini Popular</Nav.Link>
            <Nav.Link href="#produtos" className='menu'>Produtos</Nav.Link>
            <Nav.Link href="#contato" className='menus'>Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavbarMenu