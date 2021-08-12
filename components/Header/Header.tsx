import React from "react";
import { HeaderLinks, HeaderNav } from "./Header.component";
import { HeaderLink } from "../HeaderLink/HeaderLink";
const Header: React.FC = () => {
  return (
    <HeaderNav>
      <HeaderLinks>
        <HeaderLink href="/" name="Home" />
        <HeaderLink href="/" name="Skills" />
        <HeaderLink href="/" name="Projects" />
        <HeaderLink href="/" name="About" />
      </HeaderLinks>
    </HeaderNav>
  );
};

export default Header;
