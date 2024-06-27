import React from "react";
import { Link } from "react-router-dom";
import {Container, Card, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";
import Events from "./Events";
import UserNavBar from "./UserNavBar";
const UserDashboard = () => {
  const name = sessionStorage.getItem("name");

  const shows = [
    {
      title: "Music Show",
      image: "https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg",
      description: "Enjoy a spectacular music performance featuring talented artists.",
      link: "/MusicShows", 
    },
    {
      title: "Standup Show",
      image: "https://images.inc.com/uploaded_files/image/1920x1080/getty_479977238_253066.jpg",
      description: "Laugh out loud with hilarious stand-up comedians.",
      link: "/StandUpShow", 
    },
    {
      title: "Workshop Show",
      image: "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2017/01/10140928/Event-Lighting-Guide.jpg",
      description: "Participate in interactive workshops and gain valuable skills.",
      link: "/WorkShopShow", 
    },
  ];

  return (
    <>
      <UserNavBar />
      <Carousel interval={1000}>
        {shows.map((show, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <img
              className="d-block carousel-image"
              src={show.image}
              alt={`${show.title} Slide`}
            />
            <Carousel.Caption>
              <div className="welcome-message">
                <h1>Hi {name} welcome to our website</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className="mt-5">
        <h2>Explore Shows</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {shows.map((show, index) => (
            <Card key={index} style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Img variant="top" src={show.image} />
              <Card.Body>
                <Card.Title>{show.title}</Card.Title>
                <Card.Text>{show.description}</Card.Text>
                <Button as={Link} to={show.link} variant="primary">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      <Events />
      <Footer />
    </>
  );
};

export default UserDashboard;
