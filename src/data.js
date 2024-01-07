// Skills icons - https://icon-sets.iconify.design/
import React from 'react';
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)


// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import logoLight from "./images/logoLight.svg";
import logoDark from "./images/logoDark.svg";
// Hero Images (add your images to the /images directory with the same names)
import darkBackground from "./images/backgroundDarki.jpg";
import lightBackground from "./images/backgroundLighti.jpg"
import lightfrontimage from "./images/lightfrontimagei.jpg"
import darkfrontimage from "./images/blackfrontimage.jpg"
import contactimage from"./images/contactimage.png"
// Import your images for the flip card
// Import new images for the Interests section
import filmImage from './images/film.png';
import gamingImage from './images/gaming.png';
import coffeeImage from './images/coffee.png';
import mathematicsImage from './images/mathematics.png';
import investingImage from './images/investing.png';
import designImage from './images/responddesign.png';
import aiImage from './images/ai.png';

export const film = filmImage;
export const gaming = gamingImage;
export const coffee = coffeeImage;
export const mathematics = mathematicsImage;
export const investing = investingImage;
export const responddesign = designImage;
export const ai = aiImage;
// If you change the import names above then you need to change the export names below
export {darkBackground,lightBackground,lightfrontimage,darkfrontimage,contactimage};

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "JesseRoss001";

// Navbar Logo image


export const navLogoLight = logoLight;
export const navLogoDark = logoDark;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4 display-md-3 display-lg-2" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="cib:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 11,
    skill: <Icon icon="cib:microsoft-office" className="display-4" />,
    name: "Microsoft Office",
  },
  {
    id: 12,
    skill: <Icon icon="mdi:chart-bubble" className="display-4" />,
    name: "Data Analysis",
  },
  {
    id: 13,
    skill: <Icon icon="mdi:leaf" className="display-4" />,
    name: "Sustainability",
  },
  {
    id: 14,
    skill: <Icon icon="mdi:transmission-tower" className="display-4" />,
    name: "Energy Management",
  },
  {
    id: 15,
    skill: <Icon icon="mdi:factory" className="display-4" />,
    name: "Engineering",
  },
  {
    id: 16,
    skill: <Icon icon="mdi:flask" className="display-4" />,
    name: "Chemical Engineering",
  },
  {
    id: 17,
    skill: <Icon icon="mdi:math-compass" className="display-4" />,
    name: "Mathematical Modeling",
  },
  {
    id: 18,
    skill: <Icon icon="mdi:brain" className="display-4" />,
    name: "Problem Solving",
  },
  {
    id: 19,
    skill: <Icon icon="mdi:database" className="display-4" />,
    name: "Databases",
  },
  {
    id: 20,
    skill: <Icon icon="mdi:web" className="display-4" />,
    name: "Web Technologies",
  },
  {
    id: 21,
    skill: <Icon icon="mdi:language-python" className="display-4" />,
    name: "Python",
  },

 
  {
    id: 24,
    skill: <Icon icon="mdi:teach" className="display-4" />,
    name: "Teaching",
  },
  {
    id: 25,
    skill: <Icon icon="mdi:database-search" className="display-4" />,
    name: "Database Administration",
  },
  {
    id: 26,
    skill: <Icon icon="mdi:office-building" className="display-4" />,
    name: "SharePoint",
  },
  {
    id: 27,
    skill: <Icon icon="mdi:microsoft-excel" className="display-4" />,
    name: "Microsoft Excel",
  },
  {
    id: 28,
    skill: <Icon icon="mdi:earth" className="display-4" />,
    name: "Environmental Engineering",
  },
  {
    id: 29,
    skill: <Icon icon="mdi:pine-tree-fire" className="display-4" />,
    name: "Renewable Energy",
  },
  {
    id: 30,
    skill: <Icon icon="mdi:chart-areaspline" className="display-4" />,
    name: "Chart.js",
  },
  {
    id: 31,
    skill: <Icon icon="mdi:server-network" className="display-4" />,
    name: "Back-End Web Development",
  },
 
  {
    id: 34,
    skill: <Icon icon="mdi:language-python" className="display-4" />,
    name: "Python (Programming Language)",
  },
  {
    id: 35,
    skill: <Icon icon="mdi:language-php" className="display-4" />,
    name: "PHP",
  },
  {
    id: 36,
    skill: <Icon icon="mdi:language-java" className="display-4" />,
    name: "Java",
  },
  {
    id: 37,
    skill: <Icon icon="mdi:vuejs" className="display-4" />,
    name: "Vue.js",
  },
  {
    id: 38,
    skill: <Icon icon="mdi:angular" className="display-4" />,
    name: "Angular",
  },
  {
    id: 40,
    skill: <Icon icon="mdi:language-typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 41,
    skill: <Icon icon="mdi:graphql" className="display-4" />,
    name: "GraphQL",
  },
  {
    id: 42,
    skill: <Icon icon="mdi:nodejs" className="display-4" />,
    name: "Node.js",
  },
  {
    id: 43,
    skill: <Icon icon="mdi:amazon-aws" className="display-4" />,
    name: "AWS",
  },
  {
    id: 44,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 45,
    skill: <Icon icon="mdi:account-group" className="display-4" />,
    name: "Teamwork",
  },
  {
    id: 46,
    skill: <Icon icon="mdi:communication" className="display-4" />,
    name: "Interpersonal Skills",
  },
  {
    id: 47,
    skill: <Icon icon="mdi:alpha-a-circle" className="display-4" />,
    name: "Agile Methodologies",
  },{
    id: 49,
    skill: <Icon icon="mdi:api" className="display-4" />,
    name: "API Development",
  },{
    id: 51,
    skill: <Icon icon="mdi:django" className="display-4" />,
    name: "Django",
  },{
    id: 56,
    skill: <Icon icon="mdi:google-cloud" className="display-4" />,
    name: "Google Cloud",
  },
];


// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xdoqobzr";
