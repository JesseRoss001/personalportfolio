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
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

import styled from 'styled-components';

// Styled components
const ProjectsContainer = styled(Container)`
  // Add your container styles here
`;

const ProjectRow = styled(Row)`
  // Add your row styles here
`;

const ProjectCol = styled(Col)`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TitleContainer = styled(Title)`
  // Add your title styles here
`;

const Underline = styled.div`
  width: 70px;
  height: 5px;
  background: var(--primary);
  margin: auto;
`;

const ExpandButton = styled.button`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')};
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

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
    async function fetchAndSortRepos() {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const headers = {
        'Authorization': `token ${token}`
      };

      try {
        const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos`, { headers });
        if (!reposResponse.ok) {
          throw new Error(`GitHub API responded with status code: ${reposResponse.status}`);
        }
        const repos = await reposResponse.json();

        const reposWithCommits = await Promise.all(repos.map(async (repo) => {
          const commitsResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/commits`, { headers });
          if (!commitsResponse.ok) {
            console.error(`Error fetching commits for repo: ${repo.name}`);
            return { ...repo, latestCommitDate: null };
          }
          const commits = await commitsResponse.json();
          const latestCommitDate = new Date(commits[0].commit.committer.date);

          // Fetch README for the image
          const readmeResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, { headers });
          if (!readmeResponse.ok) {
            console.error(`Error fetching README for repo: ${repo.name}`);
            return { ...repo, imageUrl: null, latestCommitDate };
          }
          const readmeData = await readmeResponse.json();
          const readmeContent = atob(readmeData.content);
          const imageUrlMatch = readmeContent.match(/\!\[.*?\]\((.*?)\)/);
          const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;

          return { ...repo, imageUrl, latestCommitDate };
        }));

        // Sort by latest commit date
        reposWithCommits.sort((a, b) => b.latestCommitDate - a.latestCommitDate);

        setAllProjects(reposWithCommits);
        setDisplayedProjects(reposWithCommits.slice(0, 6));
      } catch (error) {
        console.error('Error occurred while fetching repositories:', error);
      }
    }

    fetchAndSortRepos();
  }, []);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    setDisplayedProjects(allProjects.slice(0, isExpanded ? 6 : 12));
  };

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <ProjectsContainer>
          <TitleContainer>
            <h2>Projects</h2>
            <Underline />
          </TitleContainer>
          {isLoading && <Loading />}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          <ProjectRow xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {displayedProjects.map(({ id, imageUrl, name, description, html_url, homepage }) => (
              <ProjectCol key={id}>
                <StyledCard
                  image={imageUrl}
                  name={name}
                  description={description}
                  url={html_url}
                  demo={homepage}
                />
              </ProjectCol>
            ))}
          </ProjectRow>
          {!isExpanded && allProjects.length > 6 && (
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