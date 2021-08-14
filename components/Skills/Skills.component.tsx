import styled from "styled-components";

export const SkillsSection = styled.section`
  margin: 0 10%;
  /* @media (min-width: ${(p) => p.theme.screens.lg}) {
    margin: 0 5%;
  } */
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  color: ${(p) => p.theme.colors.text};
`;

export const SubHeading = styled.p`
  color: ${(p) => p.theme.colors.accent};
`;

export const Container = styled.div`
  margin: 40px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;
  @media (min-width: ${(p) => p.theme.screens.sm}) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  font-size: 64px;
`;

export const Text = styled.span`
  color: ${(p) => p.theme.colors.accent};

  @media (max-width: ${(p) => p.theme.screens.md}) {
    font-size: 9px;
  }
`;
