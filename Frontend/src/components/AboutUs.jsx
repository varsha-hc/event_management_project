import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

function AboutUs() {
  return (
    <>
      <NavigationBar />
      <div className="aboutus-background">
        <Container className="about-us" style={{ marginTop: "100px" }}>
          <h1>About Us</h1>
          <Row className="about-us-container">
            <Col md={6} className="about-us-text">
              <p>
                Welcome to our Event Management System! An event management
                system or event management software is a digital tool that
                streamlines the planning, organization, and execution of events.
                It encompasses a range of features such as event registration,
                ticketing, venue selection, scheduling, attendee engagement, and
                post-event analysis. By using event management software, event
                organizers can simplify their tasks and more efficiently manage
                logistics, communicate with participants, and analyze data to
                enhance future events. Not to mention, event management software
                offers a centralized platform for coordination, reducing manual
                efforts and increasing precision, ultimately enhancing the
                overall success and efficiency of events. Accruent EMS is event
                management software that provides you all of these key features
                to help ensure your next event goes off without a hitch.
              </p>
            </Col>
            <Col md={6} className="about-us-image-container">
              <img
                src="https://th.bing.com/th/id/R.2368c19d3220379ab2e42edd4f9bbc5c?rik=eE0hVCuMeTw1TA&riu=http%3a%2f%2fvetbossel.in%2fwp-content%2fuploads%2f2020%2f04%2fems.jpg&ehk=P7YdhrNJeom6vWDnCAVgc2F%2bK3sA8KGRRUdgjHLLIyY%3d&risl=&pid=ImgRaw&r=0"
                alt="About Us"
                className="img-fluid about-us-image"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;