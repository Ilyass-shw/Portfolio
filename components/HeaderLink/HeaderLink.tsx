import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  list-style-type: none;
  margin-right: 20px;

  text-decoration: none;
  color: ${(p) => p.theme.colors.accent};

  :hover {
    color: ${(p) => p.theme.colors.text};
    transition: 0.2s;
  }

  &.active {
    color: ${(p) => p.theme.colors.primary};
  }
`;
interface HeaderLink {
  href: string;
  name: string;
}
export const HeaderLink: React.FC<HeaderLink> = ({ href, name }) => (
  <Link href={href} passHref>
    <StyledLink>{name}</StyledLink>
  </Link>
);
export default HeaderLink;
