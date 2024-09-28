import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row >
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="blue"> THÔNG TIN </span> CÁ NHÂN
            </h1>
            <p className="home-about-body">
              Mình thích lập trình và mình nghĩ mình đã học được gì đó trong suốt thời gian qua 🤷‍♂️
              <br />
              <br /> Mình có biết một số ngôn ngữ lập  trình như 
              <i>
                <b className="blue"> Shell , Javascript </b>
              </i>
              <br />
              <br />
              Trong tương lai, thứ mà mình quan tâm là  &nbsp;
              <i>
                <b className="blue">Web </b> và {" "}
                <b className="blue">
                  AI.
                </b>
              </i>
              <br />
              <br />
              Mình cũng muốn làm gì đó bằng <b className="blue">Node.js</b> ,
              <i>
                <b className="blue">
                  {" "}
                  Javascript
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="blue"> mỗi khi rảnh !!!</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT ME</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eddiesngu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/eddiesngu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/linhsuytu._"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
