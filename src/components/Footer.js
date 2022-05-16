import React from "react";

import { StyledFooter, StyledFooterText, StyledFooterTitle } from "../lib/styling";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTitle>Contact</StyledFooterTitle>
      <StyledFooterText bold>Sean Mckeag</StyledFooterText>
      <StyledFooterText>
        <a href="tel:+18608053461">+1 860 805 3461</a>
      </StyledFooterText>
      <StyledFooterText>
        <a href="mailto:mckeags7@gmail.com">mckeags7@gmail.com</a>
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;