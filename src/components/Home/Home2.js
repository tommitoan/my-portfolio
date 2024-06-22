import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram, AiFillFacebook, AiOutlineYoutube, AiFillYoutube, AiFillContacts, AiFillApi, AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I'm an entry Software Engineer proficient in
              <i>
                <b className="purple"> Golang, cloud infrastructure, and API development. </b>
              </i>
              <br />
              <br />
              With nearly a year of experience building scalable applications, I bring a <b className="purple">unique </b>
              perspective honed by a&nbsp;
              <i>
                <b className="purple">background in design. </b>
              </i>
              <br />
              <br />
              I'm eager to leverage my technical skills and passion for <b className="purple">problem-solving </b>
               to create
              <i>
                <b className="purple">
                  {" "}
                  innovative, user-centric software solutions.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="mailto:tommitoan1995@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/toan-ngo-1a7b25151/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://github.com/tommitoan"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.facebook.com/tommitoan1995/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <AiFillFacebook/>
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.youtube.com/@727GamingStudio"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
