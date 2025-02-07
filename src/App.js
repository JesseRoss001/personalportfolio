import React from "react";
import { useAppContext } from "./appContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGitHubInfo,
  selectError,
  selectIsLoading,
} from "./pages/homeSlice";
import { fetchGitHubReops } from "./pages/allProjectsSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { ThemeProvider } from "styled-components";

// Components
import { Container } from "react-bootstrap";
import { Loading } from "./components/globalStyledComponents";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import './animations.css';
// Pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function App() {
  const { theme, setTheme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    const updateTheme = () =>
      darkMode ? setTheme("dark") : setTheme("light");
    updateTheme();
    dispatch(fetchGitHubInfo());
    dispatch(fetchGitHubReops());

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [setTheme, dispatch]);

  if (isLoading) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center">
          <Loading />
        </Container>
      </ThemeProvider>
    );
  } else if (error) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center justify-content-center">
          <h2>{error}</h2>
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <HashRouter>
        <ThemeProvider theme={themes[theme]}>
          <ScrollToTop />
          <GlobalStyles />
          <Element name={"Home"} id="home">
            <NavBar /> {/* Updated this line */}
          </Element>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/All-Projects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    );
  }
}
