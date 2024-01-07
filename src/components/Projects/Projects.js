import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import composite from "../../Assets/Projects/composite.png";
import clashquiz from "../../Assets/Projects/clashquiz.png";
import mybiblio from "../../Assets/Projects/mybiblio.png";
import iris from "../../Assets/Projects/iris.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Découvrez mes projets sur lesquels je m'entraine.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mybiblio}
              isBlog={false}
              title="MyBiblio"
              description="Conçue pour révolutionner la façon dont vous gérez votre collection personnelle de livres, de bandes dessinées et de mangas. Notre objectif est de simplifier votre expérience de lecture en fournissant un moyen efficace de suivre votre bibliothèque personnelle, évitant ainsi l'achat de doublons et vous aidant à découvrir de nouvelles parutions."
              ghLink="https://github.com/legion-in-hell/MyBiblio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clashquiz}
              isBlog={false}
              title="Clash Quiz"
              description="Clash-Quiz est un jeu de quiz en temps réel passionnant et compétitif. Il est conçu pour tester vos connaissances dans divers domaines et vous permet de vous mesurer à d'autres joueurs en temps réel."
              ghLink="https://github.com/Legion-in-hell/Clash-Quiz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Bien que cela ne soit pas un très grand projet, ce portfolio en fait partie. J'ai utilisé ReactJS pour créer ce portfolio. J'ai utilisé React-Bootstrap pour ajouter des composants réactifs. J'ai également utilisé react-tsparticles pour ajouter des particules d'arrière-plan."
              ghLink="https://github.com/legion-in-hell/Portfolio"             
            />
          </Col>

          <h1 className="project-heading">
          Mes récentes <strong className="purple">contribution </strong>
        </h1>
        <p style={{ color: "white" }}>
          Découvrez les projets auxquels j'ai récemment contribué.
        </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={composite}
              isBlog={false}
              title="Composite"
              description="In this 2.5D platformer game, two players will embody the essence of light and shadow, with one player representing light and the other embodying shadow.

              The game's mechanics are designed to leverage the interplay between these two elements, creating a cooperative and immersive experience where your skills will be challenged."
              ghLink="https://github.com/benjaminbours/Composite"
              demoLink="http://staging.compositethegame.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iris}
              isBlog={false}
              title="Iris"
              description="Iris est un bot multifonction dévelopé par Axiaaa dans le but d'apprendre et de partager ces connaissances. La majorité du code est réalise en stream"
              ghLink="https://github.com/Axiaaa/Iris"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
