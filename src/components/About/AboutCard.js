import React from "react";
import Card from "react-bootstrap/Card";
import { BiCheck } from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hello mọi người! Mình là <span className="blue">Nguyễn Viết Linh </span>
            đến từ <span className="blue"> Yên Dũng, Bắc Giang, Việt Nam</span>
            <br/> Mình là một sinh viên học Khoa Học Máy Tính của trường Đại Học Công Nghiệp Hà Nội
            <br />
            <br />
            Ngoài Code ra thì một số hoạt động khác mà mình thích làm :
          </p>
          <ul>
            <li className="about-activity">
              <BiCheck /> Chơi Game 
            </li>
            <li className="about-activity">
              <BiCheck /> Chụp Ảnh
            </li>
            <li className="about-activity">
              <BiCheck /> Ngủ 
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
