import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useAppContext } from "../appContext";  // Make sure this is correctly imported
import { Icon } from "@iconify/react";
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

// Import your images
import { darkBackground, lightBackground, lightfrontimage, darkfrontimage } from "../data";  // Assuming these imports are correct

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0;
  min-height: 100vh;  // Ensure it does not exceed 100vh on any screen size
  background-size: cover;
  background-position: center;

  background-image: ${({ theme }) =>
    theme === "light"
      ? `url(${lightBackground})`  // Using lightBackground
      : `url(${darkBackground})`}; // Using darkBackground

  @media (min-width: 768px) {
    min-height: 80vh; // Reduced height for medium and larger devices
  }

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::before {
    background: linear-gradient(
      135deg,
      var(--primary),
      ${({ theme }) => (theme === "light" ? "var(--bs-light)" : "var(--bs-dark)")}
    );
  }

  &::after {
    background: ${({ theme }) =>
      theme === "light"
        ? "rgba(255, 255, 255, 0.4)"
        : "rgba(0, 0, 0, 0.4)"};
  }
`;

const ImageWrapper = styled.div`
  width: 100%; // Full width on small screens
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

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

export default function Hero() {
  const { name } = useSelector(selectData);
  const { theme } = useAppContext(); // Use the theme from context

  return (
    <StyledHero theme={theme}>  {/* Ensure theme is passed to StyledHero */}
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} md={6}>
            <h1 className="mb-3 display-3 title">{name}</h1>
            <SocialLinks />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <ImageWrapper theme={theme}>  {/* Ensure theme is passed to ImageWrapper */}
              <img src={theme === "light" ? lightfrontimage : darkfrontimage} alt="Front" />
            </ImageWrapper>
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to="About" className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}