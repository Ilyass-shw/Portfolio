import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects, projectsWithVid } from "./data";
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
      <SubHeading>Selection of my best projects that showcase my skills.</SubHeading>
      <Container>
        <>
          {projectsWithVid.map((project) => (
            <ProjectCard key={project?.id} {...project} />
          ))}
          <NoVidProjects>
            {projects.map((project) => (
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
