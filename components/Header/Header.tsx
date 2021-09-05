import React from "react";
import { HeaderLinks, HeaderNav } from "./Header.component";
import { HeaderLink } from "../HeaderLink/HeaderLink";
const Header: React.FC = () => {
  return (
    <HeaderNav>
      <HeaderLinks>
        <HeaderLink href="/" name="Home" />
        <HeaderLink href="/#BestProjects" name="Best Projects" />
        <HeaderLink href="/#Skills" name="Skills" />
      </HeaderLinks>
    </HeaderNav>
  );
};

export default Header;
