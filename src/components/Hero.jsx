import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../pages/homeSlice';
import { Link } from 'react-scroll';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { useAppContext } from '../appContext';
import { Col, Container, Row } from 'react-bootstrap';
import SocialLinks from './SocialLinks';
import { lightfrontimage, darkfrontimage } from "../data";

const textGradient = keyframes`
  0%, 100% {
    color: #ffffff;
  }
  50% {
    color: #cccccc;
  }
`;

const cardGradient = keyframes`
  0%, 100% {
    background: rgba(255, 255, 255, 0.75);
  }
  50% {
    background: rgba(250, 250, 250, 0.75);
  }
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
  margin: 0;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ theme }) => theme === "light"
    ? `linear-gradient(135deg, #a1c4fd, #c2e9fb)`
    : `linear-gradient(135deg, #232526, #414345)`};
  animation: ${cardGradient} 8s infinite alternate;

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
  backdrop-filter: blur(16px);
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h1`
  font-weight: 900;
  margin-bottom: 0.5rem;
  animation: ${textGradient} 8s infinite alternate;
`;

const Subheading = styled.h2`
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
              <GlassDiv>
                <Title>{name}</Title>
                <Subheading>Junior Full Stack Developer</Subheading>
                <SocialLinks />
              </GlassDiv>
            </Col>
            <Col xs={12} md={5} lg={6} className="d-flex justify-content-center pb-4">
              <ImageWrapper>
                <img src={theme === "light" ? lightfrontimage : darkfrontimage} alt="Profile" />
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </StyledHero>
    </>
  );
}
