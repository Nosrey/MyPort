import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              La programación me atrapó. Digamos que algo he entendido hasta ahora... ¿o no? 🤔
              <br />
              <br />Full-stack con fluidez en {" "}
              <i>
                <b className="purple"> React, JavaScript, React Native y back-end (MySQL). </b>
              </i>
              <br />
              <br />
              Me apasiona construir
              <i>
                <b className="purple"> tecnologías y productos web, desarrollar aplicaciones móviles </b> y trabajar en el {" "}
                <b className="purple">
                back-end.
                </b>
              </i>
              <br />
              <br />
              Cuando tengo la oportunidad, disfruto desarrollando productos con <b className="purple">Node.js</b> y la   
              <i>
                <b className="purple">
                  {" "}
                  potencia de frameworks modernos de Javascript</b>
                  &nbsp;
              </i> como<i>
                <b className="purple"> React.js y React Native.  </b>
              </i>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>REDES</h1>
            <p>
            Siéntente libre de <span className="purple">contactarme </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nosrey"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/YersonRicoDev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61558482188514"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yersonricodev/"
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
