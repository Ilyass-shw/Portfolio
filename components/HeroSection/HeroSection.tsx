import React from 'react'
import Hero from '../Hero/Hero';
import ProfilButtons from '../ProfilButtons/ProfilButtons';
import SocialMediaBtns from '../SocialMediaBtns/SocialMediaBtns';
import { PersonalInfo } from './HeroSection.component';

const HeroSection = () => {
    return (
      <PersonalInfo>
        <Hero />
        <ProfilButtons />
        <SocialMediaBtns />
      </PersonalInfo>
    );
}

export default HeroSection
