import styled from "styled-components";
import { ThemeType } from "../../theme/themes";

export const HeaderNav = styled.nav<{ theme: ThemeType }>`
  height: 5rem;
  margin-inline-start: -5%;
  display: flex;
  align-items: center;
  align-self: center;

  @media (min-width: ${(p) => p.theme.screens.sm}) {
    margin-inline-start: -30%;
  }
  @media (min-width: ${(p) => p.theme.screens.md}) {
    height: 6.5rem;
  }
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    align-self: flex-start;
    margin-inline-start: 9%;
  }
`;

export const HeaderLinks = styled.ul`

`;

export const HeaderLink = styled.li`
  background-color: rgb(254, 113, 113);
`;
