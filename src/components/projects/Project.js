import React from "react";

import ProjectThumbnail from "./ProjectThumbnail";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";

import { ProjectLink } from "../../lib/styling";

const Project = ({ projectsData }) => {
  return (
    <>
      {projectsData.map(project => {
        return (
          <ProjectLink
            key={project.href}
            href={project.href}
            aria-labelledby={project.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.featured &&
              <ProjectThumbnail
                title={project.title}
                url={project.image_url}
              />
            }
            <ProjectDescription
              shortDescription={project.short_description}
              longDescription={project.long_description}
              title={project.title}
              otherDescription={project.other_description}
              featured={project.featured}
            />
            <ProjectTags tags={project.tags}/>
          </ProjectLink>
        )
      })}
    </>
  );
};

export default Project;