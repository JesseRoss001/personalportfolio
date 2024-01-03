import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Logo from "../images/logo.svg";
import ReactFlipCard from 'reactjs-flip-card';
// Import your images
import DarkPhone from "../images/darkherosm.png";
import DarkiPad from "../images/darkheromd.png";
import DarkLaptop from "../images/darkherolg.png";
import LightPhone from "../images/lightherosm.png";
import LightiPad from "../images/lightheromd.png";
import LightLaptop from "../images/lightherolg.png";
import { Col, Container, Row, Imagefluid } from "react-bootstrap";
import { Spin } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";
import FrontImage from "../images/frontImage.jpg"; // Replace with path to your front image
import BackImage from "../images/backImage.jpg";
const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));
  background-size: cover;
  background-position: center;
  

  // Default background for mobile
  background-image: ${({ theme }) =>
    theme.name === "light"
      ? `url(${LightPhone})`
      : `url(${DarkPhone})`};

  // Override for iPad
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-image: ${({ theme }) =>
      theme.name === "light"
        ? `url(${LightiPad})`
        : `url(${DarkiPad})`};
  }

  // Override for Laptop
  @media screen and (min-width: 1025px) {
    background-image: ${({ theme }) =>
      theme.name === "light"
        ? `url(${LightLaptop})`
        : `url(${DarkLaptop})`};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      var(--primary),
      ${({ theme }) => (theme.name === "light" ? "var(--bs-light)" : "var(--bs-dark)")}
    );
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${Spin} infinite 20s linear;
    }
  }

  
`;
const FlipCardStyles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px', // Default width for small devices
    height: '400px', // Default height for small devices
    margin: '0 auto', // Center the card
  },
  frontBackStyle: {
    width: '100%',
    height: '100%',
    borderRadius: '25%', // Makes the image rounded
  },
  // Media query for medium devices
  '@media (min-width: 768px)': {
    containerStyle: {
      width: '200px', // Width for medium devices
      height: '400px', // Height for medium devices
    },
  },
  // Media query for large devices
  '@media (min-width: 992px)': {
    containerStyle: {
      width: '300px', // Width for large devices
      height: '600px', // Height for large devices
    },
  },
};


export default function Hero() {
  const { name } = useSelector(selectData);

  return (
    <StyledHero>
      <Container>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <Col className="col-12 col-md-7 col-lg-6">
            <h1 className="mb-3 display-3 title">{name}</h1>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Col>
          <Col className="d-none d-md-flex col-md-5 col-lg-6 justify-content-center">
  {/* React Flip Card replacing the logo */}
  <div style={FlipCardStyles.containerStyle}>
    <ReactFlipCard
      containerStyle={FlipCardStyles.containerStyle}
      frontStyle={{ width: '100%', height: '100%' }}
      backStyle={{ width: '100%', height: '100%' }}
      frontComponent={<img src={FrontImage} alt="Front" style={{ width: '100%', height: '100%',borderRadius:'5%' }} />}
      backComponent={<img src={BackImage} alt="Back" style={{ width: '100%', height: '100%',borderRadius:'5%' }} />}
      flipTrigger="onHover"
    />
  </div>
  <div style={FlipCardStyles.containerStyle}>
    <ReactFlipCard
      containerStyle={FlipCardStyles.containerStyle}
      frontStyle={{ width: '100%', height: '100%' }}
      backStyle={{ width: '100%', height: '100%' }}
      frontComponent={<img src={FrontImage} alt="Front" style={{ width: '100%', height: '100%',borderRadius:'5%' }} />}
      backComponent={<img src={BackImage} alt="Back" style={{ width: '100%', height: '100%',borderRadius:'5%' }} />}
      flipTrigger="onHover"
    />
  </div>
  <div style={FlipCardStyles.containerStyle}>
    <ReactFlipCard
      containerStyle={FlipCardStyles.containerStyle}
      frontStyle={{ width: '100%', height: '100%' }}
      backStyle={{ width: '100%', height: '100%' }}
      frontComponent={<img src={FrontImage} alt="Front" style={{ width: '100%', height: '100%',borderRadius:'5%' }} />}
      backComponent={<img src={BackImage} alt="Back" style={{ width: '100%', height: '100%',borderRadius:'5%' }} />}
      flipTrigger="onHover"
    />
  </div>
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
