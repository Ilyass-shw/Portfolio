import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  list-style-type: none;
  margin-right: 20px;
  text-decoration: none;
  color: rgb(108, 118, 147);
  &:active {
    color: rgb(222, 82, 82);
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
