import React from "react";

import { StyledThumbnail } from "../../lib/styling";

const ProjectThumbnail = ({ title, url }) => {
  return (
      <StyledThumbnail>
        <img
          src={process.env.PUBLIC_URL + "./images/" + url + "-303.png"}
          srcSet={`${process.env.PUBLIC_URL + "./images/" + url + "-303.png"} 303w, ${process.env.PUBLIC_URL + "./images/" + url + "-522.png"} 522w`}
          alt={title}
        />
        <p id={title}>{title}</p>
      </StyledThumbnail>
  );
};

export default ProjectThumbnail;