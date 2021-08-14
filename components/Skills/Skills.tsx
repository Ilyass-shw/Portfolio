import React from "react";
import { techSkills } from "./data";
import {
  SkillsSection,
  SkillsContainer,
  Heading,
  Container,
  Icon,
  SubHeading,
  TechWrapper,
  Text,
} from "./Skills.component";

const Skills: React.FC = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <Heading>Skills</Heading>
        <SubHeading>Technologies I've worked with</SubHeading>
        <Container>
          {techSkills.map((tech) => (
            <TechWrapper key={tech.id}>
              <Icon>{tech.icon}</Icon>
              <Text>{tech.name}</Text>
            </TechWrapper>
          ))}
        </Container>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
