import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          EventFusion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="ml-3">
              HomePage
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="ml-3">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/user-login" className="ml-3">
              User Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
