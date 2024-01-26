import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../pages/homeSlice';
import { Link } from 'react-scroll';
import styled, { createGlobalStyle, keyframes, css} from 'styled-components';
import { useAppContext } from '../appContext';
import { Icon } from '@iconify/react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialLinks from './SocialLinks';
import { lightfrontimage, darkfrontimage } from '../data';

// Gradient animations
const backgroundGradientAnimationLight = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const backgroundGradientAnimationDark = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const textPopAnimationDark = keyframes`
  0% { text-shadow: 1px 1px 2px #555; }
  50% { text-shadow: 2px 2px 3px #777; }
  100% { text-shadow: 1px 1px 2px #555; }
`;

const textPopAnimationLight = keyframes`
  0% { text-shadow: 1px 1px 2px #ace5ee; }
  50% { text-shadow: 2px 2px 3px #ace5ee; }
  100% { text-shadow: 1px 1px 2px #ace5ee; }
`;

// Glow effect animation for images
const glowEffect = keyframes`
  0%, 100% { filter: drop-shadow(0 0 10px #ace5ee); }
  50% { filter: drop-shadow(0 0 20px #ace5ee); }
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
`;

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-size: 200% 200%;
  background-image: ${({ theme }) => theme === 'light'
    ? `linear-gradient(270deg, #edf2fb, #d7e3fc, #ccdbfd, #c1d3fe, #abc4ff)`
    : `linear-gradient(270deg, #2f2b2e, #666976, #6385a9, #9fdae1, #b7d8d6)`};
  animation: ${({ theme }) => theme === 'light'
    ? css`${backgroundGradientAnimationLight} 30s ease infinite`
    : css`${backgroundGradientAnimationDark} 30s ease infinite`};
    /* 3D borders */
  border-top: 5px solid #ace5ee; /* Light electric blue color */
  border-bottom: 5px solid #ace5ee;

  /* Create the 3D effect */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 4px 5px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    min-height: 80vh;
  }
`;

const ImageWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  overflow: hidden;
  animation: ${glowEffect} 3s infinite alternate;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const GlassDiv = styled.div`
  
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  font-size:20px;
  text-shadow: 1px 1px #888;
  animation: ${({ theme }) => theme === 'light' ? css`${textPopAnimationLight} 8s infinite` : css`${textPopAnimationDark} 8s infinite`};
  color: ${({ theme }) => theme === 'light' ? '#333' : '#E1D9D1'};
  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h1`
font-weight: 700;
margin-bottom: 0.5rem;
animation: ${({ theme }) => theme === 'light' ? css`${textPopAnimationLight} 8s infinite` : css`${textPopAnimationDark} 8s infinite`};
color: ${({ theme }) => theme === 'light' ? '#333' : '#fff'};
text-shadow: 1px 1px #888;
&:hover {text-shadow : none;}
`;


const Subheading = styled.h2`
font-weight: 500;
margin-bottom: 1rem;
animation: ${({ theme }) => theme === 'light' ? css`${textPopAnimationLight} 8s infinite` : css`${textPopAnimationDark} 8s infinite`};
color: ${({ theme }) => theme === 'light' ? '#333' : '#fff'};
&:hover {text-shadow : none;}
`;

export default function Hero() {
  const { name } = useSelector(selectData);
  const { theme } = useAppContext();
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000); // Hide the message after 2 seconds
  };
  return (
    <>
      <GlobalStyle />
      <StyledHero  theme={theme}>
      <Container fluid>
          <Row className="align-items-center justify-content-center text-center">
            <Col xs={12} md={7} lg={6} className="d-flex align-items-center justify-content-center">
              <GlassDiv theme={theme}>
                <Title theme={theme}>{name}</Title>
                <Subheading theme={theme}>Junior Full Stack Developer</Subheading>
                <SocialLinks />
                {/* Button for downloading CV */}
                <a 
              className={`btn btn-${theme} m-5`} 
              href="https://docs.google.com/document/d/10C2MLR1dcGoMc9vj-AIgFy3c-Z-BAnc3Qwywi4iR-88/edit?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
                {/* Contact Information */}
                <div className="contact-info">
          <p onClick={() => copyToClipboard('jesseross001@gmail.com')}>
            Email: jesseross001@gmail.com
            {copiedText === 'jesseross001@gmail.com' && <span> Copied to clipboard!</span>}
          </p>
          <p onClick={() => copyToClipboard('+447367292269')}>
            Phone: +447367292269
            {copiedText === '+447367292269' && <span> Copied to clipboard!</span>}
          </p>
        </div>
              </GlassDiv>
            </Col>
            <Col xs={12} md={5} lg={6} className="d-flex justify-content-center pb-4">
              <ImageWrapper>
                <img src={theme === 'light' ? lightfrontimage : darkfrontimage} alt={`${name}`} />
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </StyledHero>
    </>
  );
}