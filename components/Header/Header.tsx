import React from "react";
import { HeaderLinks, HeaderNav } from "./Header.component";
import { HeaderLink } from "../HeaderLink/HeaderLink";
const Header: React.FC = () => {
  return (
    <HeaderNav>
      <HeaderLinks>
        <HeaderLink href="/" name="Home" />
        <HeaderLink href="/#Skills" name="Skills" />
        <HeaderLink href="/#BestProjects" name="Best Projects" />
      </HeaderLinks>
    </HeaderNav>
  );
};

export default Header;
