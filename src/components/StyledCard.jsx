import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.name === "light"       ? 'linear-gradient(120deg, #e0eafc 0%, #7DF9FF 100%)'
    : 'linear-gradient(120deg, #28242c 0%, #7DF9FF 100%)'};
    border: none;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 10px 20px rgba(0, 0, 0, 0.2)"
        : "0 10px 20px rgba(255, 255, 255, 0.1)"};

    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) =>
        theme.name === "light"
          ? "0 15px 30px rgba(0, 0, 0, 0.2)"
          : "0 15px 30px rgba(255, 255, 255, 0.15)"};
    padding-bottom:20px;
    }

    .card-img-top {
      height: 200px; // Fixed height for better image fit
      object-fit: cover; // Ensures the image fits nicely
    }

    .card-body {
      padding: 20px;
      
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .card-text {
      font-size: 1rem;
      margin-bottom: 15px;
    }

    .card-link {
      text-decoration: none;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.color};
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }

    .card-footer {
      background: ${({ theme }) => theme.name === "light" ? "#f8f9fa" : "#34495e"};
      border-top: 1px solid ${({ theme }) => theme.name === "light" ? "#eaecef" : "#4b4f56"};
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.3s ease;
    }
    .insights {
      margin: 10px 0;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.secondaryColor};
  
      & > div {
        margin-bottom: 4px;
      }
    }
  `;

export default function StyledCard({ image, name, description, url, demo }) {
  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={image || GH}
          alt={name}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>

        </Card.Body>
        <Card.Footer>
          {url && (
            <Card.Link href={url} target="_blank" rel="noopener noreferrer">
              View on GitHub <Icon icon="icomoon-free:github" />
            </Card.Link>
          )}
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}