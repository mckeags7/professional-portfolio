import React from "react";
import { Emphasized, StyledSection, StyledText, StyledTitle } from "../lib/styling";

const Tech = () => {
  return (
    <StyledSection>
      <StyledTitle>Tech</StyledTitle>
      <StyledText noPaddingBottom center>
        HTML, CSS, Flexbox, Grid, <Emphasized>JavaScript </Emphasized>, <Emphasized>React</Emphasized>, React Native, <Emphasized>Redux</Emphasized>, <Emphasized>Node.js</Emphasized>, Express, Mongo DB, <Emphasized>Sanity</Emphasized>, <Emphasized>Web Progressive App</Emphasized>, responsiveness, web accessibility, API:s, mob-programming, pair-programming, Github.
      </StyledText>
    </StyledSection>
  );
};

export default Tech;