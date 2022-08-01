import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Vending Machine"
              description="A vending machine selling    donut.User can deposit ether whenever they want to have donuts .Also the events are emitted according to the scenario coming and the owner of the machine can restock the machine whenever required."
              ghLink="https://github.com/amanbora856/VendingMachine"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Locker System"
              description="A Basic Locker system for depositing and withdrawing the amount as and when required also it emits event accoring to the events approaching."
              ghLink="https://github.com/amanbora856/LockerSystem"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lottery Contract"
              description=" A basic lottery contract with the ability to select the winner out of the participating players and transferring the ether to the winner's account."
              ghLink="https://github.com/amanbora856/lotterycontract"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio"
              description="The following is my portfolio which I created using different techstack .It showcase my talents and the works that I have done until now. "
              ghLink="https://github.com/amanbora856/amanbora856.github.io"
              
            />
          </Col>

 


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
