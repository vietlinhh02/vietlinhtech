import React from "react";
import { Col, Row } from "react-bootstrap";
import { Number  } from "react-icons/ri";
import  Fimehihi  from "../../Assets/Fime.png";
import  hauii  from "../../Assets/haui.png";
import  age19  from "../../Assets/age.png";
import {
  RiNumber1,
  RiNumber9,
} from "react-icons/ri";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={age19} 
                alt="age"
                className="img-fluid"
                style={{ maxHeight: "120px", padding: "10px"}}
                />
      
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={hauii} 
                alt="school pic"
                className="img-fluid"
                style={{ maxHeight: "120px", padding: "10px"}}
                />
      </Col>

      

    </Row>
  );
}

export default Education;
