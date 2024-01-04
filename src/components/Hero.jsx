import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled, { createGlobalStyle } from "styled-components";
import { useAppContext } from "../appContext";
import { Icon } from "@iconify/react";
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import { darkBackground, lightBackground, lightfrontimage, darkfrontimage } from "../data";

// Global style to import Montserrat font and define electric light blue color
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;900&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    --electric-blue: #1e90ff; // Define electric blue color
  }
`;

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh; // Adjusted for full viewport height
  background-size: cover;
  background-position: center;
  background-image: ${({ theme }) =>
    theme === "light"
      ? `url(${lightBackground})`  // Using lightBackground
      : `url(${darkBackground})`}; // Using darkBackground
  background-blend-mode: multiply; // Blend mode for dark theme
  filter: ${({ theme }) => theme === "light" ? 'brightness(0.85)' : 'none'}; // Reduced brightness for light theme
  @media (min-width: 768px) {
    min-height: 80vh; // Reduced height for medium and larger devices
  }
`;

const ImageWrapper = styled.div`
  width: 100%; // Full width on small screens
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  border-radius: 5%; // Rounded corners for images
  box-shadow: 0px 0px 15px var(--electric-blue);
  transform: ${({ theme }) => theme === "light" ? "translateY(-10px)" : "none"}; // Adding depth for light mode

  @media (min-width: 768px) {
    width: 60%; // Increased width on medium and larger devices
  }

  img {
    width: 100%;
    height: auto; // Maintain aspect ratio
    border-radius: 10px;
    box-shadow: 0px 0px 20px ${({ theme }) => theme === "light" ? "#fff" : "#000"}; // Adding glow
  }
`;

const GlassDiv = styled.div`
  background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.75)" : "rgba(20, 20, 20, 0.75)"};
  backdrop-filter: blur(16px);
  padding: 2rem;
  border-radius: 20px;
  transform:translateY(-10px)
  border: 2px solid ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
  box-shadow: 0px 0px 20px ${({ theme }) => theme === "light" ? "#fff" : "#000"}; // Adding glow
  box-shadow: 0px 0px 15px var(--electric-blue); // Glow effect
  color: var(--electric-blue); // Text color
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: var(--electric-blue);
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

const Subheading = styled.h2`
  color: var(--electric-blue);
  font-weight: 500;
  margin-bottom: 1rem;
`;



export default function Hero() {
  const { name } = useSelector(selectData);
  const { theme } = useAppContext();

  return (
    <>
      <GlobalStyle />
      <StyledHero theme={theme}>
        <Container fluid>
          <Row className="align-items-center justify-content-center text-center">
            <Col xs={12} md={7} lg={6} className="d-flex align-items-center  justify-content-center">
              <GlassDiv theme={theme} >
                <Title>{name}</Title>
                <Subheading>Junior Full Stack Developer</Subheading>
                <SocialLinks />
              </GlassDiv>
            </Col>
            <Col xs={12} md={5} lg={6} className="d-flex justify-content-center pb-4">
              <ImageWrapper>
                <img src={theme === "light" ? lightfrontimage : darkfrontimage} alt={`${name}`} />
              </ImageWrapper>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col className="text-center">
              <Link to="About" className="scroll-down">
                <Icon icon="fa6-solid:circle-chevron-down" />
              </Link>
            </Col>
          </Row>
        </Container>
      </StyledHero>
    </>
  );
}