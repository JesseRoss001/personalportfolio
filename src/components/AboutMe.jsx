import React from 'react';
import { useAppContext } from "../appContext";
import { Col, Container, Row } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const fadeInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledAboutMe = styled.section`
  background: ${({ theme }) => theme === "light" 
    ? "linear-gradient(135deg, #E1D9D1 0%, #F7F7F7 100%)" 
    : "linear-gradient(135deg, #20232a 0%, #333842 100%)"};
  color: ${({ theme }) => theme === "light" ? "#282c34" : "#fff"};
  padding: 4rem 0;
  text-align: center;
  border-top: 1px solid #61DBFB;
  border-bottom: 1px solid #61DBFB;
  animation: ${fadeInUp} 1s ease-out;

  .about-title {
    color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
    font-weight: 900;
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 2.5rem;
  }

  .icon {
    color: #61DBFB;
    margin-bottom: 1rem;
  }

  h3 {
    color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .about-card {
    background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(50, 50, 50, 0.9)"};
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: ${({ theme }) => theme === "light" ? "1px solid rgba(255, 255, 255, 0.18)" : "1px solid rgba(0, 0, 0, 0.3)"};
    transition: transform 0.3s ease;
    min-height: 250px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme === "light" ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "0 12px 24px rgba(0, 0, 0, 0.2)"};
    }
  }
  
  @media (max-width: 768px) {
    .about-card {
      min-height: auto;
    }
  }
`;

export default function AboutMe() {
  const { theme } = useAppContext();

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
}
