import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg4 from "../assets/img/website.jpg";
import projImg5 from "../assets/img/billing.jpg";
import projImg6 from "../assets/img/event.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Multiple Ecom websites",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "MultiVendor Billing Application",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Event Management App",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Selected Projects</h2>
                  <p>Project Description</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Descriptive text"
      ></img>
    </section>
  );
};
