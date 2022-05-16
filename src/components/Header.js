import React from "react";

import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { HeaderText, LinkContainer, Profile, StyledHeader, TextContainer } from "../lib/styling";

const Header = () => {
  return (
    <StyledHeader>
      <LinkContainer>
        <a
          href="https://github.com/mckeags7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Sean's Github account"
        >
          <GithubIcon />
        </a>
        <a
          aria-label="Link to Sean's LinkedIn account"
          href="https://www.linkedin.com/in/sean-m-88623920b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </LinkContainer>
      <TextContainer>
        <HeaderText>Portfolio:</HeaderText>
        <HeaderText bold>Sean Mckeag</HeaderText>
      </TextContainer>
      <h1>full-stack</h1>
      <h1>developer</h1>
      <h2>+ content writer</h2>
      <Profile />
    </StyledHeader>
  );
};

export default Header;