// Interests.jsx

import React from 'react';
import { useAppContext } from "../appContext";
import { Container, Row, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { film, gaming, coffee, mathematics, investing, responddesign, ai } from "../data";

// Styled component with gradient background and theme-responsive colors
const StyledInterests = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme === 'light'
    ? 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)'
    : 'linear-gradient(120deg, #2c3e50 0%, #4ca1af 100%)'};
  color: ${({ theme }) => theme === 'light' ? '#212529' : '#ffffff'};
  transition: color 0.3s linear, background 0.3s linear;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.2),
              inset 0 -5px 5px rgba(0, 0, 0, 0.2);
  text-align: center;

  .interest-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2.5rem;
  }

  .masonry-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .interest-card {
    margin: 1rem;
    flex: 0 1 calc(33.333% - 2rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background: transparent;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 5px 15px rgba(0, 0, 0, 0.3); // Enhanced shadow for 3D effect
    transition: transform 0.3s ease, background-color 0.3s linear;

    &:hover {
      transform: translateY(-10px);
    }
    
    .card-body {
      width: 100%;
    }
  }

  // Media queries for responsive adjustments
  @media (max-width: 1200px) {
    .interest-card {
      flex: 0 1 calc(50% - 2rem);
    }
  }

  @media (max-width: 768px) {
    .interest-card {
      flex: 0 1 calc(100% - 2rem);
    }
  }
`;

export default function Interests() {
  const { theme } = useAppContext();

  const interests = [
    { id: 1, image: film, title: 'Cinematography', text: 'The art of making motion pictures.' },
    { id: 2, image: gaming, title: 'Gaming', text: 'The culture of interactive entertainment.' },
    { id: 3, image: coffee, title: 'Coffee Art', text: 'Crafting the perfect brew.' },
    { id: 4, image: mathematics, title: 'Mathematics', text: 'Delving into the elegance and complexity of mathematical theories.' },
    { id: 5, image: investing, title: 'Investing', text: 'Navigating the intricacies of financial markets.' },
    { id: 6, image: responddesign, title: 'Responsive Design', text: 'Creating adaptable web experiences for every screen.' },
    { id: 7, image: ai, title: 'Artificial Intelligence', text: 'Exploring the potential of AI and machine learning.' },
    // Add more interests if needed
  ];

  return (
    <StyledInterests theme={theme} id="Interests">
      <h2 className="interest-title">My Interests</h2>
      <Container>
        <Row className="masonry-grid">
          {interests.map(interest => (
            <Card className="interest-card" key={interest.id}>
              <Card.Img variant="top" src={interest.image} alt={interest.title} />
              <Card.Body>
                <Card.Title style={{ color: theme === 'light' ? '#212529' : '#ffffff' }}>{interest.title}</Card.Title>
                <Card.Text style={{ color: theme === 'light' ? '#212529' : '#ffffff' }}>{interest.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </StyledInterests>
  );
}