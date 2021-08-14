import React from "react";
import { nanoid } from "nanoid";
import { Icon } from "@iconify/react";
import {
  CardWrapper,
  ProjectDescription,
  ProjectName,
  List,
  ListItem,
  LinkContainer,
  Link,
} from "./ProjectCard.component";

interface ProjectCard {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  appLink: string;
}
const ProjectCard: React.FC<ProjectCard> = ({
  name,
  description,
  techStack,
  github,
  appLink,
}) => {
  return (
    <CardWrapper>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <List>
        {techStack.map((tech) => (
          <ListItem key={nanoid()}>{tech}</ListItem>
        ))}
      </List>
      <LinkContainer>
        <Link href={github} target="_blank" rel="noreferrer">
          Github <Icon icon="akar-icons:link-out" />
        </Link>
        <Link href={appLink} target="_blank" rel="noreferrer">
          Live App <Icon icon="akar-icons:link-out" />
        </Link>
      </LinkContainer>
    </CardWrapper>
  );
};

export default ProjectCard;
