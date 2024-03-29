import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! je suis <span className="purple">ROUFF Corentin </span>
            et je viens de <span className="purple"> Lorraine, France.</span>
            <br />
            Actuellement en cours de formation indépendante.
            <br />
            J'ai déjà réalisé un bon nombre de{" "}
            <a href="/projets">
              <span className="purple">projets</span>
            </a>
            , que vous pouvez retrouver sur mon portfolio.
            <br />
            <br />
            Autre que coder, j'aime beaucoup aussi :
          </p>
          <ul>
            <li className="about-activity">🎮 Jouer à des jeux vidéo</li>
            <li className="about-activity">
              🧑🏼‍💻 Découvrir de nouvelles technologies
            </li>
            <li className="about-activity">
              🗣️ Passez du temps avec la communauté dev
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
