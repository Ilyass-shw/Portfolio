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
  Iframe,
  Video,
} from "./ProjectCard.component";

export interface ProjectCardProps {
  name: string;
  video?: string;
  description: string;
  techStack: string[];
  github: string;
  appLink: string;
  key: number | undefined;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  video,
  description,
  techStack,
  github,
  appLink,
}) => {
  return (
    <CardWrapper IsVidPro={video}>
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
      {video && (
        <>
          <Video>Tutorial Video </Video>
          <Iframe
            src="https://www.youtube.com/embed/llFHnH2AJIE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        </>
      )}
    </CardWrapper>
  );
};

export default ProjectCard;
