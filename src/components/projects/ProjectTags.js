import React from "react";

import { ProjectTag, TagsContainer } from "../../lib/styling";

const ProjectTags = ({ tags }) => {
  return (
    <TagsContainer aria-label="Techniques used in the project">
      {tags.map((tag) => {
        return (
          <ProjectTag key={tag}>{tag}</ProjectTag>
        )
      })}
    </TagsContainer>
  );
};

export default ProjectTags;