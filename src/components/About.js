import React from "react";

import { StyledSection, StyledText, SummaryDot, SummaryLine } from "../lib/styling";

const About = () => {
  return (
    <StyledSection>
      <StyledText>
        <SummaryLine />
        <SummaryDot />
        Hello! I'm Sean, a full-stack web developer and content writer. I have a background in education and I've taught in the U.S. and Tokyo, Japan. As a full-stack web developer I benefit from my solution-driven personality, my dedicated work ethic, and a fierce attention to detail that I've gained through content writing and classroom management experience. I'm a 2x Leukemia survivor and stem cell transplant recipient. I'm looking to further my career in front-end development, SaaS, and web-based applications.
      </StyledText>
    </StyledSection>
  );
};

export default About;