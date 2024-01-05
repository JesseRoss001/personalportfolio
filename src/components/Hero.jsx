import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useAppContext } from "../appContext";
import { Icon } from "@iconify/react";
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import { darkBackground, lightBackground, lightfrontimage, darkfrontimage } from "../data";

const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px var(--electric-blue), 0 0 20px var(--electric-blue);
  }
  50% {
    box-shadow: 0 0 15px var(--electric-blue), 0 0 30px var(--electric-blue);
  }
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;900&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

  :root {
    --electric-blue: #61DBFB;
  }
`;

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ theme }) => theme === "light" ? `url(${lightBackground})` : `url(${darkBackground})`};
  background-blend-mode: multiply;
  filter: ${({ theme }) => theme === "light" ? 'brightness(0.85)' : 'none'};
  
  @media (min-width: 768px) {
    min-height: 80vh;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  border-radius: 5%;
  animation: ${glowAnimation} 2s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 60%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const GlassDiv = styled.div`
  background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.75)" : "rgba(20, 20, 20, 0.75)"};
  backdrop-filter: blur(16px);
  padding: 2rem;
  border-radius: 20px;
  transform: translateY(-10px);
  border: 2px solid ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
  color: var(--electric-blue);
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
            <Col xs={12} md={7} lg={6} className="d-flex align-items-center justify-content-center">
              <GlassDiv theme={theme}>
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
              <Link to="About" className="scroll-down" style={{ color: "var(--electric-blue)" }}>
                <Icon icon="fa6-solid:circle-chevron-down" className="fs-1" />
              </Link>
            </Col>
          </Row>
        </Container>
      </StyledHero>
    </>
  );
}