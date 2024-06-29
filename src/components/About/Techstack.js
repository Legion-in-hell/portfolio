import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiAngularSimple,
  DiReact,
  DiPython,
  DiCss3,
  DiMsqlServer,
  DiJava,
  DiPhp,
  DiHtml5,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-name">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-name">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
        <div className="tech-name">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <div className="tech-name">Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <div className="tech-name">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-name">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div className="tech-name">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-name">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="tech-name">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="tech-name">CSS3</div>
      </Col>
    </Row>
  );
}

export default Techstack;
