import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { Eye, EyeSlash } from "react-bootstrap-icons"; 
import InputGroup from "react-bootstrap/InputGroup"; 

const OrganizerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/organizerLogin",
        formData
      );
      console.log(response.data);
      sessionStorage.setItem("name", response.data.data.name);
      sessionStorage.setItem("organizerid", response.data.data.organizerid);
      if (response.data) {
        alert(response.data.message);
        navigate("/organizer-dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <NavigationBar />
      <div className="bg-color">
        <div
          className="user-register-container"
          style={{
            backgroundColor: "whitesmoke",
            width: "30rem",
            height: "38rem",
            marginLeft: "23rem",
            marginTop: "4rem",
          }}
        >
          <div
            className="d-flex justify-content-center fs-1 fw-bold mt-5 pt-5"
            style={{ fontStyle: "italic" }}
          >
            Organizer Login
          </div>
          <br />

          <Container className="d-flex justify-content-center align-items-center pt-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  style={{ width: "20rem" }}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <InputGroup.Text
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button
                className="ms-4 text-center"
                variant="primary"
                type="submit"
                style={{ width: "16rem" }}
              >
                Login
              </Button>
              <br />
              <br />
            </Form>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrganizerLogin;
