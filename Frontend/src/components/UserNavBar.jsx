import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; 

function UserNavBar() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/user-dashboard" className="mr-auto">
            User Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/MusicShows" className="ml-3">
                Music Show
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/WorkShopShow" className="ml-3">
                WorkShop Show
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/StandUpShow" className="ml-3">
                Standup Show
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default UserNavBar;
