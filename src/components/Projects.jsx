import React, { useState, useEffect } from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Element } from "react-scroll";
import { githubUsername } from "../data";
import { Col, Container, Row } from "react-bootstrap";
import {  Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";
import styled, { keyframes } from 'styled-components';

import preFetchedProjects from '../data/githubProjects.json'; // Adjust path as necessary
// Styled components
const ProjectsContainer = styled(Container)`
margin-bottom:20px;
`;

const ProjectRow = styled(Row)`

border-top: 5px solid #ace5ee; /* Light electric blue color */



box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2),
  0 4px 5px rgba(0, 0, 0, 0.15);
`;


const ProjectCol = styled(Col)`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
color: ${({ theme }) => theme === "light" ? "#000" : "#fff"};
  font-weight: 900;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
  padding-bottom:1rem;
`;


const ExpandButton = styled.button`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
 border-radius: 10px;
  &:hover {
    background: ${({ theme }) => (theme === 'light' ? '#ddd' : '#555')};
  }
`;


export default function Projects() {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  useEffect(() => {
    setDisplayedProjects(preFetchedProjects.slice(0, 12)); // Display top 6 projects
}, []);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    setDisplayedProjects(allProjects.slice(0, isExpanded ? 12 : 18));
  };

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <ProjectsContainer>
        <Title theme={theme}>Projects</Title>
          {isLoading && <Loading />}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
           <ProjectRow xs={1} md={2} lg={3} className="g-4 m-4 justify-content-center">
      {displayedProjects.map(({ id, imageUrl, name, description, html_url }) => (
        <ProjectCol key={id}>
          <StyledCard
            image={imageUrl} // Use the image from README
            name={name}
            description={description}
            url={html_url}
          />
        </ProjectCol>
      ))}
    </ProjectRow>
          {!isExpanded && allProjects.length > 12 && (
            <div className="text-center mt-5">
              <ExpandButton onClick={handleExpandClick} theme={theme}>
                Show More
              </ExpandButton>
            </div>
          )}
        </ProjectsContainer>
      </section>
    </Element>
  );
}