import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Particle from "../Particle";

const educations = [
  {
    degree: "B-Tech",
    school: "Presidency University",
    duration: "2022 - 2026",
    logo: "https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    degree: "PU",
    school: "Sri Vidya Mandir PU College",
    duration: "2020- 2022",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const skills = [
  { name: "JavaScript (ES6+)", level: 65 },
  { name: "React.js", level: 60 },
  { name: "Next.js", level: 70 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 60 },
  { name: "MongoDB", level: 65 },
  { name: "Firebase Firestore", level: 75 },
  { name: "HTML5", level: 80 },
  { name: "CSS3", level: 80 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Git", level: 80 },
];

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
        <strong className="purple">Education</strong> & <strong className="purple">Skills</strong>
      </h1>

      {/* Education Section */}
      <h2 style={{ color: "white", marginBottom: "20px" }}>Education</h2>
      <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
        {educations.map((edu, idx) => (
          <Col md={5} key={idx} style={{ margin: "10px" }}>
            <div style={{ backgroundColor: "#2c2f33", padding: "20px", borderRadius: "10px" }}>
              <img
                src={edu.logo}
                alt={edu.school}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
              />
              <h3 style={{ color: "#00bcd4", marginTop: "10px" }}>{edu.degree}</h3>
              <h5 style={{ color: "white" }}>{edu.school}</h5>
              <p style={{ color: "#aaa" }}>{edu.duration}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Skills Section */}
      <h2 style={{ color: "white", marginBottom: "20px" }}>Skills</h2>
      <Row style={{ justifyContent: "center" }}>
        {skills.map((skill, idx) => (
          <Col md={5} key={idx} style={{ margin: "10px" }}>
            <h5 style={{ color: "#00bcd4" }}>{skill.name}</h5>
            <ProgressBar now={skill.level} label={`${skill.level}%`} animated variant="info" style={{ height: "10px" }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ResumeNew;
