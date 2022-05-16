import React from "react";

import { Arrows, Emphasized, StyledDescription } from "../../lib/styling";

const ProjectDescription = ({ shortDescription, longDescription, title, otherDescription, featured }) => {
  return (
    <>
      {featured
        ?
          <StyledDescription
            aria-labelledby={shortDescription}
            aria-describedby={longDescription}
          >
            <Emphasized id={shortDescription} uppercase>{shortDescription}</Emphasized>
            <span id={longDescription}>&nbsp;{longDescription}&nbsp;</span>
            <Arrows>&gt;&gt;</Arrows>
          </StyledDescription>
        :
          <StyledDescription
            aria-labelledby={title}
            aria-describedby={otherDescription}
          >
            <Emphasized id={title} uppercase>{title}</Emphasized>
            <span id={otherDescription}>&nbsp;{otherDescription}&nbsp;</span>
            <Arrows>&gt;&gt;</Arrows>
          </StyledDescription>
      }
    </>
);
};

export default ProjectDescription;