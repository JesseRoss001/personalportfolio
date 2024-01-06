import { createGlobalStyle, keyframes } from "styled-components";

const lightModeBackgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const darkModeBackgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GlobalStyles = createGlobalStyle`
:root {
  --primary-light: #ffdcf1;
  --primary: #61DBFB;
  --primary-dark: #316e7e;
  --border: 1px solid #61DBFB;
  --transition: all 0.3s linear;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --card-height: 29rem;
}

@keyframes bubbleAnimation {
  0% {
    top: -100px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}


body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color var(--transition), color var(--transition);

  &.light-mode {
    background-color: #f0f0f0;
    color: #282c34;
    background: linear-gradient(270deg, #ffffff, #f0f0f0);
    background-size: 800% 800%;
    animation: ${lightModeBackgroundAnimation} 15s ease infinite;
  }

  &.dark-mode {
    background-color: #282c34;
    color: #f0f0f0;
    background: linear-gradient(270deg, #61DBFB, #333842);
    background-size: 800% 800%;
    animation: ${darkModeBackgroundAnimation} 15s ease infinite;
  }
}

a:hover {
  cursor: pointer;
}

.navbar {
  border-bottom: var(--border);
  img {
    background: ${({ theme }) =>
      theme.name === "light" ? "#45413C" : "#797B7B"};
  }
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
    color: var(--primary);
  }
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

.title {
  font-family: "Permanent Marker";
}

.card {
  height: var(--card-height);
  border: var(--border);
  transition: transform .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 50%;
    object-fit: contain;
  }
}

.page-item.active .page-link {
  background-color: var(--primary);
  border-color: var(--primary);
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 2.5rem;
  }

  .form-group {
    max-width: 750px;
  }
}

@media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
  }
}
`;

export default GlobalStyles;