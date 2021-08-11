import React from "react";
import { HeaderLinks } from "./Header.component";
import { HeaderLink } from "../HeaderLink/HeaderLink";
const Header: React.FC = () => {
  return (
    <nav>
      <HeaderLinks>
        <HeaderLink href="/" name="Home" />
        <HeaderLink href="/" name="skills" />
        <HeaderLink href="/" name="Projects" />
        <HeaderLink href="/" name="About" />
      </HeaderLinks>
    </nav>
  );
};

export default Header;
