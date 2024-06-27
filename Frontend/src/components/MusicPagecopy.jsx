import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

function MusicPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allEvents");
        if (response.data && response.data.data) {
          setEvents(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.eventid} xs={12} md={6} lg={4}>
              <Cards
                img={event.image}
                title={event.title}
                text={event.description}
                location={event.location}
                startDate={event.startDate}
                endDate={event.endDate}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MusicPage;
