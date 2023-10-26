import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/Chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Speak from "../../Assets/speak.png"
import Acmec from "../../Assets/acmec.png"
import Tracer from "../../Assets/tracer.png"

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
              title="ReviewMyBoss"
              description="Post a feedback for manager or about the company by the employee."
              // demoLink="https://reviewmyboss.netlify.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Investor Underground"
              description="Real estate project. To using this application selling or buying our Lands."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mercentrade Money"
              description="It is Fintech-Domain(Money Tranaction platform admin panel).Used role based autherization. "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Speak}
              isBlog={false}
              title="SpeakApp"
              description="Speak is an Online learning platform where students can create a profile,
              option for the language which they are interested to learn and also should select a language in
              which they are fluent, ask a question or raise their doubts, and can see the active tutor and
              make a call"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Acmec}
              isBlog={false}
              title="ACMEC"
              description="We developed a donation Web application for temple, which can be accessed
              through Web or mobile browsers"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tracer}
              isBlog={false}
              title="TRACER"
              description="Tracer is a powerful application meticulously designed to streamline and enhance
              the process of tracking and managing shipping containers."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DataHub"
              description="DataHub is a data migration admin dashboard project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-Commerce(Shopping)"
              description="It is a shopping website like flipcart or amazon."
              // demoLink="https://e-commercedomain.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
