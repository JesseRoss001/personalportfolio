import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppContext } from "../appContext"; 
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';

// Define your keyframes as usual
const lightModeKeyframe = keyframes`
  0% { background: #a1c4fd; }
  50% { background: #c2e9fb; }
  100% { background: #a1c4fd; }
`;

const darkModeKeyframe = keyframes`
  0% { background: #333; }
  50% { background: #222; }
  100% { background: #111; }
`;

// Create a mixin for the gradient animation
const gradientAnimation = css`
  animation: ${({ theme }) => theme === "light"
    ? css`${lightModeKeyframe} 10s ease infinite`
    : css`${darkModeKeyframe} 10s ease infinite`};
`;

// Apply the animation mixin to your component
const StyledAboutMe = styled.section`
  ${gradientAnimation}
  padding: 4rem 0;
  text-align: center;
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme === "light"
    ? "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
    : "linear-gradient(120deg, #232526 0%, #414345 100%)"};
  color: ${({ theme }) => theme === "light" ? "#282c34" : "#fff"};
  
  .about-title {
    color: inherit;
    font-weight: 900;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2.5rem;
  }

  .about-card {
    background: ${({ theme }) => theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(50, 50, 50, 0.9)'};
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    min-height: 250px;
    transition: transform 0.3s ease;
  }
`;

const AboutMe = () => {
  const { theme } = useAppContext(); // Make sure to have theme state in your context

  return (
    <StyledAboutMe theme={theme}>
      <Container>
        <h2 className="about-title">About Me</h2>
        <Row className="justify-content-center">
          <Col md={4} className="d-flex align-items-stretch">
            <div className="about-card">
              <FontAwesomeIcon icon={faUserGraduate} size="3x" className="icon" />
              <h3>My Journey</h3>
              <p>
                Transitioning into tech with a Full Stack course, leveraging my background in Chemical Engineering and teaching.
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
            <div className="about-card">
              <FontAwesomeIcon icon={faCode} size="3x" className="icon" />
              <h3>Tech Passion</h3>
              <p>
                A fervent developer, dedicated to innovative solutions in technology and web development.
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
            <div className="about-card">
              <FontAwesomeIcon icon={faLightbulb} size="3x" className="icon" />
              <h3>Creative Projects</h3>
              <p>
                Founder of Create Nova, focusing on empowering local businesses with digital solutions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledAboutMe>
  );
};

export default AboutMe;
