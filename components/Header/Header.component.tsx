import styled from "styled-components";
import Link from "next/link";
import { ThemeType } from "../../theme/themes";

export const HeaderNav = styled.nav<{ theme: ThemeType }>`
  height: 5rem;
  display: flex;
  align-items: center;
  padding-inline-start: 2rem;

  @media (min-width: ${(p) => p.theme.screens.sm}) {
    height: 8rem;
    margin-inline-start: 1rem;
  }
  @media (min-width: ${(p) => p.theme.screens.md}) {
    margin-inline-start: 10rem;
  }
`;

export const HeaderLinks = styled.ul`
 
`;

export const HeaderLink = styled.li`
  background-color: rgb(254, 113, 113);
`;
