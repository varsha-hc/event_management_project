import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate=useNavigate();
  const { title, image, description} =
    event;

  const handleBuyTickets = () => {
   
    navigate('/Ticket')
  };

  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleBuyTickets}>
          Buy tickets
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;