import styled from "styled-components";

export const ThemeIcon = styled.p`
  svg {
    display: inline-flex;
    width: 1.6rem;
    height: auto;
    position: absolute;
    top: 3.5rem;
    right: 2rem;
    cursor: pointer;

    @media (min-width: ${(p) => p.theme.screens.sm}) {
      top: 3.6rem;
      right: 15%;
    }
    @media (min-width: ${(p) => p.theme.screens.md}) {
      top: 4.3rem;
    }
    @media (min-width: ${(p) => p.theme.screens.lg}) {
      right: 18vw;
      top: 4rem;
    }
  }
`;
