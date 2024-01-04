import React, { useState, useEffect } from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Element } from "react-scroll";
// Data
import { filteredProjects, githubUsername } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

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
          return { ...repo, latestCommitDate: new Date(commits[0].commit.committer.date) };
        }));

        // Sort by latest commit date
        reposWithCommits.sort((a, b) => b.latestCommitDate - a.latestCommitDate);

        // Store all projects and initially display the first 6 projects
        setAllProjects(reposWithCommits);
        setDisplayedProjects(reposWithCommits.slice(0, 6));
      } catch (error) {
        console.error('Error occurred while fetching repositories:', error);
      }
    }

    fetchAndSortRepos();
  }, []);

  const handleExpandClick = () => {
    // Expand to show the top 12 projects
    setIsExpanded(true);
    setDisplayedProjects(allProjects.slice(0, 12));
  };

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          {isLoading && <Loading />}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {displayedProjects.map(({ id, image, name, description, html_url, homepage }) => (
              <Col key={id}>
                <StyledCard
                  image={image}
                  name={name}
                  description={description}
                  url={html_url}
                  demo={homepage}
                />
              </Col>
            ))}
          </Row>
          {!isExpanded && allProjects.length > 6 && (
            <div className="text-center mt-5">
              <button onClick={handleExpandClick} className={`btn ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"}`}>
                Show More
              </button>
            </div>
          )}
        </Container>
      </section>
    </Element>
  );
}