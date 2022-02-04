import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/cart" className="text-decoration-none">
                <i className="fas fa-shopping-cart"></i> cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-decoration-none">
                <i className="fas fa-user"></i> login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
