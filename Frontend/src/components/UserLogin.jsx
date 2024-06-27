import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { Eye, EyeSlash } from "react-bootstrap-icons"; 
import InputGroup from "react-bootstrap/InputGroup"; 

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

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
        "http://localhost:8080/userLogin",
        formData
      );
      console.log(response.data);
      if (!response.data.isError) {
        alert(response.data.message);
        const { name, userid, email, eventName, numberOfPerson, eventid } =
          response.data.data;
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("userid", userid);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("eventName", eventName);
        sessionStorage.setItem("numberOfPerson", numberOfPerson);
        sessionStorage.setItem("eventid", eventid);
        navigate("/user-dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
            height: "40rem",
            marginLeft: "23rem",
            marginTop: "4rem",
          }}
        >
          <div
            className="d-flex justify-content-center fs-1 fw-bold mt-5 pt-5 "
            style={{ fontStyle: "italic" }}
          >
            User Login
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
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <InputGroup.Text
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {passwordVisible ? <EyeSlash /> : <Eye />}
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
              <Form.Text
                className="d-flex justify-content-center"
                style={{ color: "blueviolet" }}
                as={Link}
                to="/user-register"
              >
                New User? Register Here
              </Form.Text>
            </Form>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLogin;
