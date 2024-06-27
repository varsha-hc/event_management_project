import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <>
      <div>
        <Card style={{ width: "15rem", height: "25rem", margin: "8px" }}>
          <Card.Img variant="top" src={props.img} style={{ height: "20rem" }} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Cards;