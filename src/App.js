import React from "react";
import { ThemeProvider } from "styled-components";

import data from "./assets/data.json";

import GlobalStyles from "./lib/global";
import theme from "./lib/theme";
import Header from "./components/Header";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import More from "./components/More";
import Footer from "./components/Footer";

import { StyledContainer } from "./lib/styling";

const projectsData = data.projects;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <StyledContainer>
        <About />
        <Tech />
        <Projects projectsData={projectsData}/>
        <Skills />
        <More />
      </StyledContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
