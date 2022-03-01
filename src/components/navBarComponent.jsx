import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
class NavBarComponent extends React.Component {
    render() {
      return <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Amarilis Cake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tortas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Alfajores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cajas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    }
  }

export default NavBarComponent;