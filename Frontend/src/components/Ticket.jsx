import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import UserNavBar from "./UserNavBar";
import axios from "axios";
import {Container} from "react-bootstrap";

const Ticket = () => {
  const [formData, setFormData] = useState({
    eventid: sessionStorage.getItem("eventid") || "",
     price: "",
    userid: sessionStorage.getItem("userid"),
    name: sessionStorage.getItem("name"),
    email: sessionStorage.getItem("email"),
    title: sessionStorage.getItem("title") || "",
    numberOfPerson: "",
  });

  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputFocus = (e) => {
    const { name, value } = e.target;
    if (value === "" && name in formData) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: sessionStorage.getItem(name) || "",
      }));
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    if (value === "" && name in formData) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const errors = {};

    if (!formData.eventid) {
      errors.eventid = "Event ID is required";
    }

    if (!formData.price) {
      errors.price = "Price is required";
    }

    if (!formData.userid) {
      errors.userid = "User ID is required";
    }

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.title) {
      errors.title = "Event Name is required";
    }

    if (!formData.numberOfPerson) {
      errors.numberOfPerson = "Number of Person is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8080/postticketregister",
          {
            userid: parseInt(formData.userid),
            eventid: parseInt(formData.eventid),
            tickets: [{ price: parseFloat(formData.price) }],
            name: formData.name,
            email: formData.email,
            title: formData.title,
            numberOfPerson: parseInt(formData.numberOfPerson),
          }
        );
        console.log("Response:", response.data);
        alert("Ticket added successfully!");
  
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to add ticket.");
        
      }
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <>
      <UserNavBar />
      <Container className="d-flex justify-content-center">
        <Form noValidate onSubmit={handleSubmit} className="mt-5 border rounded shadow p-5">
          <h1>Ticket Booking</h1>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Event Name"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {error.eventName && (
                <p style={{ color: "red" }}>{error.eventName}</p>
              )}
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Number of Person</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Number of Person"
                name="numberOfPerson"
                value={formData.numberOfPerson}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {error.numberOfPerson && (
                <p style={{ color: "red" }}>{error.numberOfPerson}</p>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Event ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Event ID"
                name="eventid"
                value={formData.eventid}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {error.eventid && <p style={{ color: "red" }}>{error.eventid}</p>}
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label>Price</Form.Label>
              <Form.Control
                as="select"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="500">500-general</option>
                <option value="1000">1000-vip</option>
                <option value="1500">1500-vvip</option>
              </Form.Control>
              {error.price && <p style={{ color: "red" }}>{error.price}</p>}
            </Form.Group>
          </Row>
          <Button type="submit">Book Now</Button>
        </Form>
      </Container>
    </>
  );
};

export default Ticket;