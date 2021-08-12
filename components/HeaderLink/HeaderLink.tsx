import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { StyledLink } from "./HeaderLink.component";

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
