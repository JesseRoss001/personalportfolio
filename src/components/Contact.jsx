import React, { useContext } from "react";
import { Element } from "react-scroll";
import styled, { keyframes, ThemeContext } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { contactimage } from "../data";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledSection = styled.section`
  padding-top: 80px; // Adjusted for a better view
  padding-bottom: 50px; // Add more space at the bottom
  position: relative;
  background: ${({ theme }) => theme === "light"
    ? "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
    : "linear-gradient(120deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"};
  transition: background-color 0.3s ease;
`;

const AwesomeDiv = styled.div`
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#282c34"};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  animation: ${fadeIn} 1s ease;
  margin-bottom: 50px; // Ensure spacing from the last section
`;

const ImageWrapper = styled.div`
  background-image: url(${contactimage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: auto; // Adjust height automatically
  width: 100%;
  max-width: 400px; // Keep original size
  margin: auto; // Center the image in its column
`;

export default function Contact() {
  const theme = useContext(ThemeContext);

  return (
    <Element name={"Contact"} id="contact">
      <StyledSection>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} sm={12} md={8} lg={6}>
              <AwesomeDiv>
                <h2>Contact Me</h2>
                <ContactForm />
              </AwesomeDiv>
            </Col>
            <Col xs={12} sm={12} md={4} lg={6}>
              <ImageWrapper />
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </Element>
  );
}
