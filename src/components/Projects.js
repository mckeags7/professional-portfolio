import React from "react";

import Project from "./projects/Project";

import { StyledSection, StyledTitle, StyledSubTitle, ProjectsContainer } from "../lib/styling";

const Projects = ({ projectsData }) => {
  const featuredProjects = projectsData.filter(item => item.featured);
  const otherProjects = projectsData.filter(item => !item.featured);

  return (
    <StyledSection>
      <StyledTitle>Featured projects</StyledTitle>
      <ProjectsContainer>
        <Project projectsData={featuredProjects}/>
      </ProjectsContainer>
      <StyledSubTitle>Other projects</StyledSubTitle>
      <ProjectsContainer>
        <Project projectsData={otherProjects}/>
      </ProjectsContainer>
    </StyledSection>
  );
};

export default Projects;