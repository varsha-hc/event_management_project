import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import UserNavBar from "./UserNavBar";

function MusicShows() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/events?eventType=Music Show"
      );
      if (response.data && response.data.data) {
        setEvents(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching Music Show events:", error);
    }
  };

  return (
    <>
      <UserNavBar /> <br /> <br /> <br />
      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.eventid} xs={12} md={6} lg={4}>
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MusicShows;
