import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {FaFacebook, FaGithub, FaLinkedinIn, FaMailBulk, FaMailchimp, FaYoutube} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Based on a design by Soumyajit Behera</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} tommitoan</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="mailto:tommitoan1995@gmail.com"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaMailBulk/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/toan-ngo-1a7b25151/"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaLinkedinIn/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://github.com/tommitoan"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaGithub/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.facebook.com/tommitoan1995/"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaFacebook/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.youtube.com/@727GamingStudio"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaYoutube/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
