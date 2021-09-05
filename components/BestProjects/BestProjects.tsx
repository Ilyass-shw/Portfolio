import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsWithNoVid, projectsWithVid } from "./data";
import {
  Wrapper,
  Heading,
  SubHeading,
  Container,
  NoVidProjects,
} from "./BestProjects.component";

const BestProjects: React.FC = () => {
  return (
    <Wrapper>
      <Heading id="BestProjects">Best Projects</Heading>
      <SubHeading>
        Selection of my best projects to showcase my skills.
      </SubHeading>
      <Container>
        <>
          {projectsWithVid.map((project) => (
            <ProjectCard key={project?.id} {...project} />
          ))}
          <NoVidProjects>
            {projectsWithNoVid.map((project) => (
              <>
                <ProjectCard key={project?.id} {...project} />
              </>
            ))}
          </NoVidProjects>
        </>
      </Container>
    </Wrapper>
  );
};

export default BestProjects;
