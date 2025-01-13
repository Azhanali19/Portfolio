import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Azhaan Ali </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I am currently employed as a software developer intern at SA PODIT SERVICES LLP.
            <br />
            I have completed  Bachelor of Engineering (BE) in Computer Science and Engineering at EWIT
            Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring cutting-edge technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning & Self-Improvement
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Azhaan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
