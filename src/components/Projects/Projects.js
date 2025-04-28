import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const experiences = [
  {
    title: "IoT Solutions Developer",
    company: "SmartTech Innovations",
    duration: "2023 - Present",
    description:
      "Designed and developed a Smart Surveillance System using Raspberry Pi, integrating motion detection, image capturing, and real-time alerts. Worked on optimizing hardware-software interaction using Python and OpenCV. Collaborated with a team to deploy scalable and affordable security solutions for residential and commercial use.",
    logo: "https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Frontend Developer",
    company: "SkyWeather Solutions",
    duration: "2022 - 2023",
    description:
      "Built and maintained a responsive Weather Dashboard application using React.js and Material-UI. Integrated real-time data fetching from the OpenWeatherMap API and enhanced user experience with dynamic search and 5-day forecast features. Focused on optimizing app performance and accessibility.",
    logo: "https://images.unsplash.com/photo-1707396172160-448cab6de831?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MERN Stack Developer Intern",
    company: "FlavorVerse",
    duration: "2021 - 2022",
    description:
      "Contributed to the development of a full-stack Recipe Sharing Platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented user authentication with JWT and Passport.js, developed RESTful APIs, and worked on building interactive UI components to improve user engagement.",
    logo: "https://images.unsplash.com/photo-1621921644855-9b890783dbe3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Professional Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          A glimpse of my work journey and contributions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((exp, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={exp.logo}
                isBlog={false}
                title={exp.title}
                description={exp.description}
                ghLink="" // Optional: you can add github link if experience involves projects
                demoLink="" // Optional: demo links
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
