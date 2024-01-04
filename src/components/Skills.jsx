import React from 'react';
import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import { skillData, resume } from "../data";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import styled from 'styled-components';

const GlassEffect = styled.div`
background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.85)" : "#333"}

  backdrop-filter: blur(10px);
  border-radius: 10px;
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 140px; // Adjust as needed
  width: 100px; // Adjust as needed
  margin: auto; // Center within the column
  padding:0px;
`;

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col lg={2} md={3} xs={4} key={skills.id} className="my-md-5 ps-0 pe-0 pb-2">
                  <GlassEffect>
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                  </GlassEffect>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
