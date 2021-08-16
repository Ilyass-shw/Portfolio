import React from "react";
import MobileLayout from "../../assets/Mobile.svg";
import BigScreenLayout from "../../assets/BigScreen.svg";
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
  return (
    <Layouts>
      <BigScreen>
        <Image
          src={BigScreenLayout}
          alt="Mobile Layout"
          width={450}
          height={236}
        />
        <BigScreenContent>
          <Image src={filter} alt="Mobile Layout" width={320} height={179} />
        </BigScreenContent>
      </BigScreen>
      <Mobile>
        <Image
          src={MobileLayout}
          alt="BigScreen Layout"
          width={140}
          height={230}
        />
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
