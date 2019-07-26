import React from 'react';
import HeroContainer from './elements/hero-container';
import HeroUnderLine from './elements/hero-underline';
import HeroTitle from './elements/hero-title';
import HeroFigure from './elements/hero-figure';

export interface HeroProps {
  title: string;
  imageSrc: string;
  underline: string;
}

export const Hero = ({ title, imageSrc, underline }: HeroProps) => {
  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroUnderLine>{underline}</HeroUnderLine>
      <HeroFigure imageSrc={imageSrc} />
    </HeroContainer>
  );
};

export default Hero;
