import React from "react";

import { SkillBlock, SkillsContainer, StyledListTitle, StyledSection, StyledTitle, ListItem, StyledList } from "../lib/styling";

const Skills = () => {
  return (
    <StyledSection>
      <StyledTitle>Skills</StyledTitle>
      <SkillsContainer>
        <SkillBlock>
          <StyledListTitle>Code</StyledListTitle>
          <StyledList>
            <ListItem>HTML5</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Javascript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>React Native</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Styled Components</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>RESTful APIs</ListItem>
            <ListItem>MongoDB</ListItem>
            <ListItem>Mongoose</ListItem>
            <ListItem>Authentication</ListItem>
            <ListItem>Sanity</ListItem>
          </StyledList>
        </SkillBlock>
        <SkillBlock>
          <StyledListTitle>Toolbox</StyledListTitle>
          <StyledList>
            <ListItem>Github</ListItem>
            <ListItem>Visual Studio Code</ListItem>
            <ListItem>Postman</ListItem>
            <ListItem>MongoDB Compass</ListItem>
            <ListItem>Adobe Photoshop</ListItem>
            <ListItem>Microsoft Excel</ListItem>
            <ListItem>Microsoft OneNote</ListItem>
            <ListItem>Microsoft PowerPoint</ListItem>
            <ListItem>Slack</ListItem>
            <ListItem>Figma</ListItem>
            <ListItem>Basecamp</ListItem>
          </StyledList>
        </SkillBlock>
        <SkillBlock>
          <StyledListTitle>More</StyledListTitle>
          <StyledList>
            <ListItem>Agile methodology</ListItem>
            <ListItem>Project management</ListItem>
            <ListItem>Release management</ListItem>
            <ListItem>Content Management System</ListItem>
            <ListItem>Documentation</ListItem>
            <ListItem>Tutorials</ListItem>
          </StyledList>
        </SkillBlock>
      </SkillsContainer>
    </StyledSection>
  );
};

export default Skills;