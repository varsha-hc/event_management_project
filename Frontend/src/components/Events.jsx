import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
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

  const handleClick = (eventid, title) => {
    sessionStorage.setItem("eventid", eventid);
    sessionStorage.setItem("title", title);
    navigate("/Ticket");
  };

  return (
    <>
      <Container>
        <Row>
          {events.map((event) => (
            <Col
              key={event.eventid}
              xs={12}
              md={6}
              lg={4}
              style={{
                border: "1px solid black",
                justifyContent: "space-between",
                padding: "5%",
              }}
            >
              <Cards
                img={event.image}
                title={event.title}
                text={event.description}
                location={event.location}
                startDate={event.startDate}
                endDate={event.endDate}
              />
              <Button
                variant="primary"
                style={{ marginLeft: "20%" }}
                onClick={() => handleClick(event.eventid, event.title)}
              >
                Buy tickets
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Events;
