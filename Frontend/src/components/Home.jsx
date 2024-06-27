import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css"; 
import Footer from "./Footer";
import FAQs from "./Faq";
import AboutUs from "./AboutUs";
import NavigationBar from "./NavigationBar";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <Carousel interval={1000}>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block carousel-image"
            src="https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="welcome-message">
              WELCOME TO
              <br /> EVENT MANAGEMENT
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
              WELCOME TO
              <br /> EVENT MANAGEMENT
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
              WELCOME TO
              <br /> EVENT MANAGEMENT
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <AboutUs />
      <br />
      <FAQs />
      <br />
      <Footer />
    </>
  );
};

export default HomePage;
