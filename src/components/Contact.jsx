import React from 'react';
import { Element } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import { contactimage } from '../data';
import { useAppContext } from '../appContext';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledSection = styled.section`
  padding-top: 80px;
  padding-bottom: 50px;
  position: relative;

  /* Transition and animation properties (as previously included) */
  /* ... */

  background: ${({ theme }) =>
    theme === 'light'
      ? 'linear-gradient(120deg, #e0eafc 0%, #7DF9FF 100%)'
      : 'linear-gradient(120deg, #28242c 10%, #7DF9FF 100%)'
  };

  /* 3D borders */
  border-top: 5px solid #ace5ee; /* Light electric blue color */
  border-bottom: 5px solid #ace5ee;

  /* Create the 3D effect */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 4px 5px rgba(0, 0, 0, 0.15);
`;

const AwesomeDiv = styled.div`
  background: ${({ theme }) => theme === 'light' ? '#ffffff' : '#282c34'};
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme === 'light' ? '0 20px 25px rgba(0, 0, 0, 0.1)' : '0 20px 25px rgba(255, 255, 255, 0.05)'};
  animation: ${fadeIn} 1s ease;
  margin-bottom: 50px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* subtle 3D hover effect */
    box-shadow: ${({ theme }) => theme === 'light' ? '0 25px 30px rgba(0, 0, 0, 0.2)' : '0 25px 30px rgba(255, 255, 255, 0.1)'};
  }
`;

export default function Contact() {
  const { theme } = useAppContext();

  return (
    <Element name={'Contact'} id='contact'>
      <StyledSection theme={theme}>
        <Container>
          <Row className="align-items-center justify-content-center">
          <Col xs={12} sm={12} md={4} lg={6}>
              <img src={contactimage} alt="Contact" style={{ maxWidth: '400px', width: '100%', height: 'auto', margin: 'auto' }} />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <AwesomeDiv theme={theme}>
                <h2>Contact Me</h2>
                <ContactForm />
              </AwesomeDiv>
            </Col>

          </Row>
        </Container>
      </StyledSection>
    </Element>
  );
}
