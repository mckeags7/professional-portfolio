import React from "react";

import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { StyledSection, IconWrapper, StyledTitle, IconContainer } from "../lib/styling";

const More = () => {
  return (
    <StyledSection>
      <StyledTitle>For more</StyledTitle>
      <IconContainer>
        <IconWrapper>
          <a
            href="https://github.com/mckeags7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Sean's Github account"
            >
            <GithubIcon />
          </a>
          <p>Github</p>
        </IconWrapper>
        <IconWrapper>
          <a
            href="https://www.linkedin.com/in/sean-m-88623920b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Sean's LinkedIn account"
          >
            <LinkedInIcon />
          </a>
          <p>LinkedIn</p>
        </IconWrapper>
      </IconContainer>
    </StyledSection>
  );
};

export default More;