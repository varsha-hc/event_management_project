import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const formstyle = {
  alignContent: "center",
  margin: "10%",
  marginLeft: "30%",
};

function EventRegistration() {
  const [formData, setFormData] = useState({
    organizerid: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    eventType: "",
    image: "",
  });

  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.title) {
      errors.title = "Title is required";
    }

    if (!formData.description) {
      errors.description = "Description is required";
    }

    if (!formData.startDate) {
      errors.startDate = "Start Date is required";
    }

    if (!formData.endDate) {
      errors.endDate = "End Date is required";
    }

    if (!formData.eventType) {
      errors.eventType = "Event Type is required";
    }

    if (!formData.image) {
      errors.image = "Image URL is required";
    }

    if (!formData.location) {
      errors.location = "Location is required";
    }

    if (!formData.organizerid) {
      errors.organizerid = "Organizer ID is required";
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
          "http://localhost:8080/posteventregister",
          {
            organizerid: parseInt(formData.organizerid),
            evnts: [
              {
                title: formData.title,
                description: formData.description,
                startDate: formData.startDate,
                endDate: formData.endDate,
                location: formData.location,
                eventType: formData.eventType,
                image: formData.image,
              },
            ],
          }
        );
        console.log(response.data);
        alert("Event added successfully!");
        setFormData({
          organizerid: "",
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          location: "",
          eventType: "",
          image: "",
        });
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to add event.");
      }
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form
        style={formstyle}
        noValidate
        onSubmit={handleSubmit} className="mt-5 border rounded shadow p-5">
        <h2>Organize an Event</h2>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Organizer Id</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Organizer Id"
              name="organizerid"
              value={formData.organizerid}
              onChange={handleInputChange}
            />
            {error.organizerid && (
              <p style={{ color: "red" }}>{error.organizerid}</p>
            )}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            {error.title && <p style={{ color: "red" }}>{error.title}</p>}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Start Date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
            {error.startDate && (
              <p style={{ color: "red" }}>{error.startDate}</p>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="End Date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
            {error.endDate && <p style={{ color: "red" }}>{error.endDate}</p>}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            {error.description && (
              <p style={{ color: "red" }}>{error.description}</p>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Image URL"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
            {error.image && <p style={{ color: "red" }}>{error.image}</p>}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Event Type</Form.Label>
            <Form.Control
              as="select"
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Music Show">Music Show</option>
              <option value="Workshop Show">Workshop Show</option>
              <option value="Standup Show">Standup Show</option>
            </Form.Control>
            {error.eventType && (
              <p style={{ color: "red" }}>{error.eventType}</p>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom08">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
            {error.location && <p style={{ color: "red" }}>{error.location}</p>}
          </Form.Group>
        </Row>
        <Button type="submit">Add Event</Button>
      </Form>
    </Container>
  );
}

export default EventRegistration;
