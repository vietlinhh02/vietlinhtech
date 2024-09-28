import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeaudition } from "react-icons/si";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiPhp
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaudition/>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
