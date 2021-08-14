import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "./data";
import {
  Wrapper,
  Heading,
  SubHeading,
  Container,
} from "./BestProjects.component";

const BestProjects: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Projects</Heading>
      <SubHeading>Collection of personal web dev projects</SubHeading>
      <Container>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default BestProjects;
