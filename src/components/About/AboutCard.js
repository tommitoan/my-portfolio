import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Toan Ngo (tommitoan) </span>
            from <span className="purple"> Ho Chi Minh City, Vietnam.</span>
            <br/>
            I am currently employed as a Golang developer at <a href="https://gtgsoft.com/" target="_blank" rel="noopener noreferrer" className="purple-none">GTG Software</a>.
            <br/>
            I specialize in Golang, cloud infrastructure, and API development, and I'm passionate about building
            user-centric software.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Ex-landscape architect, current developer.<br/>
            Still growing things, just in a different way. "{" "}
          </p>
          <footer className="blockquote-footer">tommitoan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
