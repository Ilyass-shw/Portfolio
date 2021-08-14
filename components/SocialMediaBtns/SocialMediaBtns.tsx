import React from "react";
import { Link, SocialLinks } from "./SocialMediaBtns.component";
import { Icon } from "@iconify/react";

const SocialMediaBtns: React.FC = () => {
  return (
    <SocialLinks>
      <Link
        href={"https://github.com/Ilyass-shw"}
        aria-label={`Github Link Icon`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="ant-design:github-outlined" />
      </Link>
      <Link
        href={"https://github.com/Ilyass-shw"}
        aria-label={`Github Link Icon`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="bx:bxl-linkedin-square" />
      </Link>
    </SocialLinks>
  );
};

export default SocialMediaBtns;
