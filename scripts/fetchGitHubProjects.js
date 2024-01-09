// scripts/fetchGitHubProjects.js
const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const githubUsername = 'JesseRoss001'; // Replace with your GitHub username

async function fetchGitHubProjects() {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    if (!response.ok) {
        throw new Error(`Failed to fetch repos: ${response.status}`);
    }
    const repos = await response.json();

    const reposWithDetails = await Promise.all(repos.map(async (repo) => {
        // Fetch latest commit date
        const commitsResponse = await fetch(repo.commits_url.replace('{/sha}', ''));
        if (!commitsResponse.ok) {
            console.error(`Failed to fetch commits for repo ${repo.name}: ${commitsResponse.status}`);
            return {...repo, latestCommitDate: null, imageUrl: null};
        }
        const commits = await commitsResponse.json();
        const latestCommitDate = commits[0]?.commit.committer.date;

        // Fetch README for the image
        const readmeResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repo.name}/contents/README.md`);
        if (!readmeResponse.ok) {
            return {...repo, latestCommitDate, imageUrl: null};
        }
        const readmeData = await readmeResponse.json();
        const readmeContent = Buffer.from(readmeData.content, 'base64').toString('utf8');
        const imageUrlMatch = readmeContent.match(/\!\[.*?\]\((.*?)\)/);
        const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;

        return {...repo, latestCommitDate, imageUrl};
    }));

    // Sort by latest commit date
    reposWithDetails.sort((a, b) => new Date(b.latestCommitDate) - new Date(a.latestCommitDate));

    fs.writeFileSync('src/data/githubProjects.json', JSON.stringify(reposWithDetails, null, 2));
}

fetchGitHubProjects();
