import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import xrayr from "../../Assets/Projects/xrayr.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="blue">Project Của Mình </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xrayr}
              isBlog={false}
              title="Chuyển VPS sang VPN để connect Web bị chặn bằng Xrayr!"
              description="A Xray backend framework that can easily support many panels.

              A back -end framework based on XRAY supports V2ay, Trojan, Shadowsocks protocols, which are easy to expand and support multi -panel docker.
              
              If you like this project, you can click STAR+WATCH in the upper right corner to continue to pay attention to the progress of this project."
              ghLink="https://github.com/2landsme/2lands-xrayr"
               demoLink="https://ai.vietlinh.tech/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
