import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        {/* <Navbar bg="dark" variant="dark" fixed='top'>
          <Container>
          <Navbar.Brand href="#home">PhotoClick</Navbar.Brand>

         <div>
         <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Service</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
         </div>

          </Container>
        </Navbar> */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='container mb-2'>
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="">Service</Nav.Link>
      <Nav.Link href="#deets">Blog</Nav.Link>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link href="#deets">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
      </>
    );
};

export default Header;