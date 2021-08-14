import styled from "styled-components";

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 40px 40px 40px;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    justify-content: flex-start;
    margin: 20px 40px 40px 0;
  }
`;

export const Link = styled.a`
  font-size: 30px;
  color: inherit;
  text-decoration: none;
  margin: 0 10px 0 0;
`;
