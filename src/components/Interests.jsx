import React from 'react';
import { useAppContext } from "../appContext";
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

// Import images from your data file
import { energy1, energy2, ai, responddesign, coffee, mathematics, poker1, poker2 } from "../data";

const StyledInterests = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme === "light" ? "#E1D9D1" : "#20232a"};
  color: ${({ theme }) => theme === "light" ? "#282c34" : "#fff"};

  .interest-card {
    margin-bottom: 2rem;
    border: none;
    background: ${({ theme }) => theme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(50, 50, 50, 0.9)"};
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-5px);
    }

    .card-img-top {
      width: 100%; // Ensure the image takes up the full card width
      height: auto; // Maintain aspect ratio
    }

    .card-img-wrapper {
      padding: 1rem; // Padding around the image
    }

    .card-body {
      padding: 1rem;
    }

    .double-image-wrapper {
      display: flex;
      justify-content: space-around; // Spacing between images
      align-items: center;
    }

    .double-image {
      height: 150px; // Set a minimum height for the smaller images
      object-fit: contain; // Prevent image stretch
    }
  }
`;

export default function Interests() {
  const { theme } = useAppContext();

  const interests = [
    {
      id: 1,
      images: [energy1, energy2],
      title: 'Renewable Energy',
      text: 'Advocating for a sustainable future through green energy solutions.',
      doubleImage: true
    },
    {
      id: 2,
      images: [ai],
      title: 'Artificial Intelligence',
      text: 'Exploring the limitless potential of AI in modern problem-solving.',
      doubleImage: false
    },
    {
      id: 3,
      images: [responddesign],
      title: 'Responsive Design',
      text: 'Crafting seamless web experiences that adapt across devices and screens.',
      doubleImage: false
    },
    {
      id: 4,
      images: [coffee],
      title: 'Coffee Culture',
      text: 'Exploring the art and science behind brewing the perfect cup of coffee.',
      doubleImage: false
    },
    {
      id: 5,
      images: [mathematics],
      title: 'Mathematics',
      text: 'Delving into the elegance and complexity of mathematical theories and applications.',
      doubleImage: false
    },
    {
      id: 6,
      images: [poker1, poker2],
      title: 'Poker Strategy',
      text: 'Analyzing the skillful balance of chance and strategy in the game of poker.',
      doubleImage: true
    },
    // Add more interests as needed
  ];
  return (
    <StyledInterests theme={theme}>
      <Container>
        <Row>
          {interests.map(interest => (
            <Col lg={4} md={6} sm={12} key={interest.id}>
              <Card className="interest-card">
                <div className={interest.doubleImage ? "double-image-wrapper" : "card-img-wrapper"}>
                  {interest.images.map((image, index) => (
                    <img
                      className={interest.doubleImage ? "double-image" : "card-img-top"}
                      src={image}
                      alt={`Interest ${interest.id}`}
                      key={index}
                    />
                  ))}
                </div>
                <Card.Body >
                  <Card.Title>{interest.title}</Card.Title>
                  <Card.Text>{interest.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </StyledInterests>
  );
}