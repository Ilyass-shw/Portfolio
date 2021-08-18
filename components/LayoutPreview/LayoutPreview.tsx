import React from "react";
import DarkMobileLayout from "../../assets/DarkMobile.svg";
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
import { useLocalStorage } from "../../hooks/useLocalStorage";

const LayoutPreview: React.FC = () => {
  const [storedTheme] = useLocalStorage();
  const theme =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("theme") as string)
      : "dark";
  console.log(theme);
  console.log(storedTheme);
  return (
    <Layouts>
      <BigScreen>
        {storedTheme === "dark" ? (
          <Image
            src={DarkBigScreenLayout}
            alt="Mobile Layout"
            width={456}
            height={237}
          />
        ) : (
          <Image
            src={DarkBigScreenLayout}
            alt="Mobile Layout"
            width={456}
            height={237}
          />
        )}
        <BigScreenContent>
          <Image src={filter} alt="Mobile Layout" width={320} height={179} />
        </BigScreenContent>
      </BigScreen>
      <Mobile>
        {storedTheme === "dark" ? (
          <Image
            src={DarkMobileLayout}
            alt="BigScreen Layout"
            width={140}
            height={230}
          />
        ) : (
          <Image
            src={DarkMobileLayout}
            alt="BigScreen Layout"
            width={140}
            height={230}
          />
        )}
        <MobileContent>
          <Image
            src={PreviewAnimation}
            alt="Mobile Layout"
            width={115}
            height={165}
          />
        </MobileContent>
      </Mobile>
    </Layouts>
  );
};

export default LayoutPreview;
