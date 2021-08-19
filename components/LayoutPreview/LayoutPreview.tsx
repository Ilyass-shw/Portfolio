import React from "react";
import DarkMobileLayout from "../../assets/DarkMobile.svg";
import WhiteMobileLayout from "../../assets/WhiteMobile.svg";
import DarkBigScreenLayout from "../../assets/DarkBigScreen.svg";
import WhiteBigScreenLayout from "../../assets/WhiteBigScreen.svg";
import filter from "../../assets/filter.gif";
import PreviewAnimation from "../../assets/PreviewAnimation.gif";
import {
  Layouts,
  BigScreenContent,
  MobileContent,
  Mobile,
  BigScreen,
} from "./LayoutPreview.component";
import Image from "next/image";

const LayoutPreview: React.FC = () => {
  const theme =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("theme") as string)
      : "dark";
  return (
    <Layouts>
      <BigScreen>
        {theme === "dark" ? (
          <Image
            src={DarkBigScreenLayout}
            alt="Mobile Layout"
            width={456}
            height={237}
            z-index={5}
            over
          />
        ) : (
          <Image
            src={WhiteBigScreenLayout}
            alt="Mobile Layout"
            width={456}
            height={237}
            z-index={5}
            over
          />
        )}
        <BigScreenContent>
          <Image src={filter} alt="Mobile Layout" width={320} height={179} />
        </BigScreenContent>
      </BigScreen>
      <Mobile>
        {theme === "dark" ? (
          <Image
            src={DarkMobileLayout}
            alt="BigScreen Layout"
            width={140}
            height={230}
          />
        ) : (
          <Image
            src={WhiteMobileLayout}
            alt="BigScreen Layout"
            width={140}
            height={230}
            z-index={5}
            over
          />
        )}
        <MobileContent>
          <Image
            src={PreviewAnimation}
            alt="Mobile Layout"
            width={115}
            height={165}
            z-index={5}
            over
          />
        </MobileContent>
      </Mobile>
    </Layouts>
  );
};

export default LayoutPreview;
