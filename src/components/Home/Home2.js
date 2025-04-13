import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PARLONS <span className="purple"> UN PETIT PEU </span> DE MOI
            </h1>
            <p className="home-about-body">
              Je suis débutant dans le milieu de la programmation, mais je suis
              également un <br />
              fervent passionné !
              <br />
              <br />
              Mes langages préférés sont
              <i>
                <b className="purple"> JavaScript et Python. </b>
              </i>
              <br />
              <br />
              Toujours à la quête d'apprentissage, &nbsp;
              <i>
                <b className="purple">
                  j'aime contribuer aux projets open source{" "}
                </b>{" "}
                et je cherche tout le temps à réaliser{" "}
                <b className="purple">des formations.</b>
              </i>
              <br />
              <br />
              Étant très motivé à en faire mon métier, ma{" "}
              <b className="purple">motivation</b> est
              <i>
                <b className="purple"> sans limite !</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
