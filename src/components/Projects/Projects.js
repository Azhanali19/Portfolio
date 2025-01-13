import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lunchbox from "../../Assets/Projects/lunchbox.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lunchbox}
              isBlog={false}
              title="Eat Lunch Box"
              description="An online food delivery system designed as a website that allows customers to view the menu and place orders. It also features an admin interface for restaurants to manage and fulfill customer orders efficiently."
              ghLink="https://github.com/Azhanali19/eatlunchbox"
              demoLink="http://eatlunchbox.infy.uk/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
