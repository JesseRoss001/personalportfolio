import React from 'react';
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
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
  background-color: ${({ theme }) => theme === "light" ? "#E1D9D1" : "rgb(33, 37, 41)"};
  color: ${({ theme }) => theme === "light" ? "#282c34" : "#fff"};
  padding: 4rem 0;
  text-align: center;
  border:0px solid #61DBFB;

  .about-title {
    margin-bottom: 2rem;
    animation: ${fadeInUp} 1s ease-out forwards;
    font-size: 2.5rem;
    color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
  }

  .icon {
    color: #61DBFB; // Light blue icons
    margin-bottom: 1rem;
  }

  h3 {
    color: ${({ theme }) => theme === "light" ? "#000" : "#fff"}; // Light blue headings
  }

  .about-card {
    background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.85)" : "#333"};
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: ${({ theme }) => theme === "light" ? "blur(10px)" : "none"};
    border: ${({ theme }) => theme === "light" ? "1px solid rgba(255, 255, 255, 0.18)" : "none"};
    transition: transform 0.3s ease;
    min-height: 250px; // Ensure consistent card height
    box-shadow: 0px 0px 20px ${({ theme }) => theme === "light" ? "#61DBFB" : "#000"}; 

    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme === "light" ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "0 12px 24px rgba(0, 0, 0, 0.2)"};
    }
  }
  
  @media (max-width: 768px) {
    .about-card {
      min-height: auto; // Allow cards to adjust height on smaller screens
    }
  }
`;

export default function AboutMe() {
  const { theme } = useAppContext();

  return (
    <StyledAboutMe theme={theme}>
      <Container>
        <div className="about-title">About Me</div>
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