import React from 'react';
import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import { skillData, resume } from "../data";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled, { css } from 'styled-components';

const Title = styled.h2`
  color: ${({ theme }) => theme === "light" ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.85)"};
  font-weight: 900;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Section = styled.section`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  }
`;

const GlassEffect = styled.div`
  background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.65)" : "rgba(50, 50, 50, 0.65)"};
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 140px;
  width: 130px;
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.75)" : "rgba(50, 50, 50, 0.75)"};
  }

  figure {
    margin: 0;
  }

  figcaption {
    font-size: 0.9rem;
    color: ${({ theme }) => theme === "light" ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.85)"};
    margin-top: 0.5rem;
  }
`;

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <Section className="section" theme={theme}>
        <Container>
          <Title theme={theme}>Skills</Title>
          <div className="underline"></div>
          <Row className="mt-3 align-items-center justify-content-center">
            {skillData.map((skill) => (
              <Col lg={2} md={3} sm={4} xs={6} key={skill.id} className="mb-4 p-0">
                <GlassEffect theme={theme}>
                  <figure>
                    {skill.skill}
                    <figcaption>{skill.name}</figcaption>
                  </figure>
                </GlassEffect>
              </Col>
            ))}
          </Row>
          {resume && (
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                Résumé
              </Button>
            </a>
          )}
        </Container>
      </Section>
    </Element>
  );
}