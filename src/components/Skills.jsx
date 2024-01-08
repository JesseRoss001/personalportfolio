import React, { useEffect, useRef } from 'react';
import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import { skillData, resume, lightBackground, darkBackground } from "../data"; 
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
  }
`;


const Section = styled.section`
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: ${({ theme }) => theme === "light" ? `url(${lightBackground})` : `url(${darkBackground})`}; // Set background image based on theme
  background-blend-mode: multiply;
  filter: ${({ theme }) => theme === "light" ? 'brightness(0.85)' : 'none'};

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
  z-index:2;

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


  const BottomDiv = styled.div`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme === "light" ? "#f0f0f0" : "#303030"};
  color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
`;
function createBubbles(element, theme) {
  const bubbleCount = 15; // Adjust for desired bubble density
  let bubbleIndex = 0;

  const createBubble = () => {
    if (bubbleIndex < bubbleCount) {
      const bubble = document.createElement("span");

      // Wider range for size and duration
      const size = Math.random() * 60 + 20 + "px";
      const duration = Math.random() * 30 + 10 + "s";
      const position = Math.random() * 100 + "%"; // Wide initial spread

      // Apply styles for the bubble
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = position;
      bubble.style.animationDelay = Math.random() * 30 + "s"; // Longer delay range
      bubble.style.animationDuration = duration;
      bubble.style.opacity = Math.random()*0.6;
      bubble.style.backgroundColor = theme === "light" ? "#61DBFB" : "#FFFFFF";
      bubble.style.position = "absolute";
      bubble.style.top = "-2000px"; // Start off-screen
      bubble.style.borderRadius = "50%";
      bubble.style.zIndex = 1; // Place behind the div
      bubble.style.animation = "bubbleAnimation 25s infinite ease-in-out";

      element.appendChild(bubble);

      bubbleIndex++;

      // Slower generation interval
      setTimeout(createBubble, 500);
    }
  };

  createBubble(); // Start creating bubbles
}

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

        </Container>

      </Section>
    </Element>
  );
}