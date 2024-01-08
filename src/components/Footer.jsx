import React from 'react'; // Ensure React is in scope
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { useAppContext } from "../appContext";
const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  padding: 1rem 0;
  text-align: center;
  background: ${({ theme }) =>
    theme === 'light'
      ? 'linear-gradient(120deg, #e0eafc 0%, #7DF9FF 100%)'
      : 'linear-gradient(120deg, #28242c 10%, #7DF9FF 100%)'
  };
  color: ${({ theme }) => theme === "light" ? "#282c34" : "#fff"};

  a {
    color: ${({ theme }) => theme === 'light' ? '#45413c' : '#fff'};

    &:hover {
      color: ${({ theme }) => theme === 'light' ? '#fbfdff' : '#a1c4fd'};
    }
  }

  /* Optional: Box shadow and transition for elements inside the footer */
  .some-footer-element {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    }
  }
`;

export default function Footer() {
  const { theme } = useAppContext(); // Make sure to have theme state in your context

  return (
    <StyledFooter theme={theme} className="d-flex align-items-center justify-content-center p-2">
      <SocialLinks />
    </StyledFooter>
  );
}

