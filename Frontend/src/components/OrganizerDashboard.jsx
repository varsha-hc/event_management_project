import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";
import { Link as RouterLink, useNavigate } from "react-router-dom"; 

const OrganizerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const name = sessionStorage.getItem("name");

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
        <Container fluid>
          <Navbar.Brand
            as={RouterLink}
            to="/organizer-dashboard"
            className="mr-auto"
          >
            Organizer Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                as={RouterLink}
                to="/EventRegisteration"
                className="ml-3"
              >
                Add Events
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel interval={1000}>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block carousel-image"
            src="https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="welcome-message">
              <h1>Hi {name} welcome to our website</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block carousel-image"
            src="https://images.inc.com/uploaded_files/image/1920x1080/getty_479977238_253066.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="welcome-message">
              <h1>Hi {name} welcome to our website</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block carousel-image"
            src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2017/01/10140928/Event-Lighting-Guide.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="welcome-message">
              <h1>Hi {name} welcome to our website</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <Footer />
    </>
  );
};

export default OrganizerDashboard;
