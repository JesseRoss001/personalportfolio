import React , {useEffect} from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useAppContext } from "../appContext";
import { useSpring, animated } from 'react-spring';
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
const cycleDarkColors = keyframes`
  0% { background-color: rgba(25, 20, 20, 0.75); }
  25% { background-color: rgba(40, 35, 35, 0.75); }
  50% { background-color: rgba(55, 50, 50, 0.75); }
  75% { background-color: rgba(40, 35, 35, 0.75); }
  100% { background-color: rgba(25, 20, 20, 0.75); }
`;

const cycleLightColors = keyframes`
  0% { background-color: rgba(255, 250, 250, 0.75); }
  25% { background-color: rgba(240, 235, 235, 0.75); }
  50% { background-color: rgba(225, 220, 220, 0.75); }
  75% { background-color: rgba(240, 235, 235, 0.75); }
  100% { background-color: rgba(255, 250, 250, 0.75); }
`;

const GlassDiv = styled(animated.div)`
  backdrop-filter: blur(16px);
  padding: 2rem;
  border-radius: 20px;
  border: ${({ theme }) => theme === "light" ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.5)"};
  color: var(--electric-blue);
  margin-bottom: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, color 1s;

  &:hover {
    color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
    transform: scale(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const Title = styled.h1`
 
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

const Subheading = styled.h2`
 
  font-weight: 500;
  margin-bottom: 1rem;
`;

// Cursor overlay component
const CursorOverlay = styled(animated.div)`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  mix-blend-mode: screen;
`;

export default function Hero() {
  const { name } = useSelector(selectData);
  const { theme } = useAppContext();
  const [style, setStyle] = useSpring(() => ({
    background: 'rgba(255, 255, 255, 0.75)',
    color: 'var(--electric-blue)'
  }));
  // react-spring hook for cursor position
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 120, friction: 120 } }));

  const mouseMove = (e) => {
    set({ xy: [e.clientX, e.clientY] });
  };
  useEffect(() => {
    setStyle.start({
      background: theme === "light"
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(30, 144, 255, 0.75) 100%)'
        : 'rgba(20, 20, 20, 0.75)',
      color: theme === "light" ? 'var(--electric-blue)' : '#000',
       // Change text color based on theme
      config: { duration: 2000 }
    });
  }, [theme, setStyle]);


  return (
    <>
      <GlobalStyle />
      <StyledHero theme={theme} onMouseMove={mouseMove}>
        <Container fluid>
          <Row className="align-items-center justify-content-center text-center">
            <Col xs={12} md={7} lg={6} className="d-flex align-items-center justify-content-center">
            <GlassDiv theme={theme} style={style}>
                <Title>{name}</Title>
                <Subheading >Junior Full Stack Developer</Subheading>
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
        {theme === "light" && (
          <CursorOverlay
            style={{
              transform: xy.interpolate((x, y) => `translate3d(${x - 950}px, ${y - 200}px, 0)`),
              background: 'rgba(97, 219, 251, 0.6)',
              width: '400px',
              height: '400px',
            }}
          />
        )}
      </StyledHero>
    </>
  );
}
