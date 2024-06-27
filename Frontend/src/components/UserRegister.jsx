import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserRegister.css"; 
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    mobileno: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.mobileno) {
      errors.mobileno = "Mobile number is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (!formData.dob) {
      errors.dob = "Date of birth is required";
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
          "http://localhost:8080/postuserregister",
          formData
        );
        console.log(response.data);
        if (!response.data.isError) {
          alert(response.data.message);
          navigate("/user-login");
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
        <>
    <NavigationBar/>
    <div className="bg-color">
    <div className="user-register-container">
      <div className="user-register-title">User Register</div>
      <Container className="d-flex justify-content-center align-items-center pt-4">
        <Form className="user-register-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="form-control"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {error.name && <p style={{color:'red'}}>{error.name}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              className="form-control"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
              placeholder="Date of Birth"
            />
            {error.dob && <p style={{color:'red'}}>{error.dob}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              className="form-control"
              name="mobileno"
              type="tel"
              value={formData.mobileno}
              onChange={handleInputChange}
              placeholder="Mobile Number"
            />
            {error.mobileno && <p style={{color:'red'}}>{error.mobileno}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              className="form-control"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email ID"
            />
            {error.email && <p style={{color:'red'}}>{error.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="form-control"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            {error.password && <p style={{color:'red'}}>{error.password}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Button
              className="user-register-button"
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default UserRegister;
