import React from "react";
import { HeroSection, Avatar, ShortIntro } from "./Hero.component";

const Hero: React.FC = () => {
  return (  
    <HeroSection>
      <ShortIntro>
        I&apos;m Ilyass, a passionate programmer and creative developer with a
        background in Mathematics. I have developed a strong interest.
      </ShortIntro>
      <Avatar
        alt="avatar"
        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
      />
    </HeroSection>
  );
};

export default Hero;
