import React, { useEffect, useRef } from 'react';
import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import { skillData, resume } from "../data";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled,{keyframes} from 'styled-components';

const Title = styled.h2`
color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
  font-weight: 900;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
  padding-bottom:1rem;
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

const bubbleAnimation = keyframes`
  0% {
    bottom: -100px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    opacity: 0;
  }`;
  const BottomDiv = styled.div`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme === "light" ? "#f0f0f0" : "#303030"};
  color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
`;

export default function Skills() {
  const { theme } = useAppContext();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      createBubbles(containerRef.current, theme);
    }
  }, [theme]);

  return (
  
    <Element name="Skills" id="skills">
    <Section className="section" theme={theme} ref={containerRef}>
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
        <BottomDiv theme={theme}>
          {/* Additional content or decoration can go here */}
        </BottomDiv>
      </Section>
    </Element>
  );
}
function createBubbles(element, theme) {
  const bubbleCount = 30;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("span");
    const size = Math.random() * 40 + 20 + "px";  // Random size between 20px and 60px
    const delay = Math.random() * 30 + "s";       // Random delay between 0s and 30s
    const duration = Math.random() * 20 + 10 + "s";  // Random duration between 10s and 30s
    const position = Math.random() * 100 + "%";

    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = position;
    bubble.style.animationDelay = delay;
    bubble.style.animationDuration = duration;
    bubble.style.opacity = Math.random();
    bubble.style.backgroundColor = theme === "light" ? "#61DBFB" : "#FFFFFF";
    bubble.style.position = "absolute";
    bubble.style.top = "-100px";  // Start above the view
    bubble.style.borderRadius = "50%";
    bubble.style.animation = "bubbleAnimation 25s infinite";

    element.appendChild(bubble);
  }
}