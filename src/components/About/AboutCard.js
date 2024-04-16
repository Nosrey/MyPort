import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">soy Yerson Rico </span>
            de <span className="purple"> Caracas, Venezuela. </span>
            <br />
            Soy un desarrollador full stack con experiencia trabajando en diferentes empresas y con equipos multidisciplinarios.
            <br />
            Titulado en informática como técnico superior y en constante aprendizaje.
            <br />
            <br />
            aparte de la programación, ¡Otras actividades que me gustan hacer son!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> La lectura
            </li>
            <li className="about-activity">
              <ImPointRight /> El cine
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La creatividad es la inteligencia divirtiéndose."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
