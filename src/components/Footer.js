import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const [showModal, setShowModal] = useState(false);

  const openWindow = () => setShowModal(true);
  const closeWindow = () => setShowModal(false);

  const modalStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    borderColor: "rgba(255, 255, 255, 0.3)",
  };

  const headerAndFooterStyle = {
    padding: "20px",
  };

  const textStyle = {
    color: "#333",
  };

  const titleStyle = {
    color: "#0275d8",
  };

  return (
    <Container fluid className="footer">
      <Modal show={showModal} onHide={closeWindow} style={modalStyle}>
        <Modal.Header closeButton style={headerAndFooterStyle}>
          <Modal.Title style={titleStyle}>Mentions légales</Modal.Title>
        </Modal.Header>
        <Modal.Body style={textStyle}>
          <section id="introduction">
            <h2>1. Identification de l'éditeur</h2>
            <p>
              Le présent site est édité par :
              <ul>
                <li>Rouff Corentin </li>
                <li>3 rue belles fontaines, 57730 Valmont</li>
                <li>Téléphone : 0650836143</li>
                <li>Courriel : rouff.corentin@hotmail.fr</li>
              </ul>
            </p>
          </section>

          <section id="hebergement">
            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :
              <ul>
                <li>HOSTINGER operations, UAB</li>
                <li>Švitrigailos str. 34, Vilnius 03230 Lithuania</li>
                <li>Téléphone : +37064503378</li>
                <li>Courriel : domains@hostinger.com</li>
              </ul>
            </p>
          </section>

          <section id="propriete-intellectuelle">
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus du site (textes, images, vidéos, etc.) est
              protégé par le droit d'auteur et par les droits de propriété
              intellectuelle. Toute reproduction ou utilisation de ces contenus
              est strictement interdite sans l'autorisation expresse de
              l'éditeur.
            </p>
          </section>

          <section id="liens-hypertexte">
            <h2>4. Liens hypertexte</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d'autres sites
              internet. L'éditeur ne saurait être tenu responsable du contenu de
              ces sites.
            </p>
          </section>

          <section id="loi-applicable-et-juridiction">
            <h2>6. Loi applicable et juridiction</h2>
            <p>
              Les présentes mentions légales sont régies par la loi française.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>
              Les présentes mentions légales sont accessibles à tout moment sur
              le site. Elles peuvent être modifiées à tout moment par l'éditeur.
            </p>
          </section>
        </Modal.Body>
        <Modal.Footer style={headerAndFooterStyle}>
          <button onClick={closeWindow} id="close-button-modal">
            Fermer
          </button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col md="3" className="footer-copywright">
          <h3>Designed and Developed by Rouff Corentin</h3>
        </Col>
        <Col md="3" className="footer-copywright">
          <h3>Copyright © {year} CoreDev</h3>
        </Col>
        <Col md="3" className="footer-body">
          <h3 onClick={openWindow} className="footer-body-link-text">
            Mentions légales
          </h3>
        </Col>
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/legion-in-hell"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Legion_Fr_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rouff/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
