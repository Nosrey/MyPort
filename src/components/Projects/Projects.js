import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import dpower from "../../Assets/Projects/dpower.png";
import onmodoApp from "../../Assets/Projects/onmodo-app.png";
import onmodoWeb from "../../Assets/Projects/onmodo-web.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong> recientes.
        </h1>
        <p style={{ color: "white" }}>
        Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dpower}
              isBlog={false}
              title="DPWER"
              description="DPOWER es una red social enfocada para los atletas con discapacidades paralíticas, la visión de la aplicación es poder brindarles un apoyo al ayudarlos a recibir más visibilidad de personas que deseen apoyarlos en su sueño"
              ghLink="https://github.com/Nosrey/dpowerFront"
              demoLink="https://www.youtube.com/watch?v=qzWMiKoslQw&ab_channel=JorgeChavez"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onmodoApp}
              isBlog={false}
              title="On-modo Mobile App"
              description="Una aplicación para la gestión de tareas, personal y recursos para el lado administrativo de tu empresa"
              ghLink="https://github.com/Nosrey/onmodo-app/blob/master/README.md"
              demoLink="https://www.youtube.com/watch?v=1cjAOrgCQSE&ab_channel=YersonRico"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onmodoWeb}
              isBlog={false}
              title="On-modo Web App"
              description="Version web de la aplicación de onmodo, con funciones extras y mas detalladas para la gestión del lado administrativo de tu empresa"
              ghLink="https://github.com/Nosrey/onmodo-web"
              demoLink="https://youtu.be/yx7ikTZLp74?si=ofLzPKBNMEAQqevL"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
