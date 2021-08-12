import styled from "styled-components";
import Link from "next/link";
import { ThemeType } from "../../theme/themes";

export const HeaderNav = styled.nav<{ theme: ThemeType }>`
  height: 5rem;
  margin-inline-start: -15%;
  display: flex;
  align-items: center;
  /* padding-inline-start: 2rem; */

  @media (min-width: ${(p) => p.theme.screens.sm}) {
    /* height: 8rem; */
    margin-inline-start: -30%;
  }
  @media (min-width: ${(p) => p.theme.screens.md}) {
    /* margin-inline-start: 7.5rem; */
    height: 6.5rem;
  }
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    /* margin-inline-start: 7.5rem; */
    margin-inline-start: 13%;
  }
`;

export const HeaderLinks = styled.ul``;

export const HeaderLink = styled.li`
  background-color: rgb(254, 113, 113);
`;
