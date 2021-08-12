import React from "react";
import { Link, SocialLinks } from "./SocialMediaBtns.component";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMediaBtns: React.FC = () => {
  return (
    <SocialLinks>
      <Link
        href={"https://github.com/Ilyass-shw"}
        aria-label={`Github Link Icon`}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </Link>
      <Link
        href={"https://github.com/Ilyass-shw"}
        aria-label={`Github Link Icon`}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </Link>
    </SocialLinks>
  );
};

export default SocialMediaBtns;
