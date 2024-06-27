import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; 

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={3}>
          <ul className="fList">
          <h5>EventFusion</h5>
            
             
            
            <li className="fListItem">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="lstyle">Home</Link>
            </li>
            <li className="fListItem">
              <Link to="/about-us" onClick={() => window.scrollTo(0, 0)} className="lstyle">About Us</Link>
            </li>
            <li className="fListItem">
              <Link to="/user-login" onClick={() => window.scrollTo(0, 0)} className="lstyle">User Login</Link>
            </li>
            <li className="fListItem">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="lstyle">Contact</Link>
            </li>
            <li className="fListItem">
              <Link to="/organizer-login" onClick={() => window.scrollTo(0, 0)} className="lstyle">Organizer Login</Link>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="fList">
          <h5>Address</h5>
            <li className="fListItem">
              
              <p>
                Event Management Private Limited
                <br />
                Near Hottagalli industrial Area,
                <br />
                6/858-M, Silent shores,
                <br />
                Mysore 570018,
                <br /> Karnataka, India.
              </p>
            </li>
          </ul>
        </Col>
        <Col md={3} className="text-right">
          <ul className="social-icons">
            <h5>Social Contact</h5>
            
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" className="social-icon" />
              </a>
              <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" className="social-icon" />
              </a>
            
          </ul>
        </Col>
      </Row>
      <div className="fText text-center">Copyright © 2024 EventFusion.</div>
    </Container>
  );
};

export default Footer;
