import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @supports (display: grid) {
    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: 290px 1fr;
      grid-template-rows: auto auto;
      grid-column-gap: 50px;
      align-items: start;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 52px;
  text-align: center;
  max-width: 290px;

  @supports (display: grid) {
    @media (min-width: 600px) {
      max-width: none;
      text-align: left;
      align-self: end;
      margin-bottom: 0;

      grid-column: 2;
    }
  }
`;

const HeroFigure = styled.figure`
  display: block;
  padding: $hero-figure-padding $hero-figure-padding 0 0;
  background-color: transparent;
  background-image: url('./assets/images/hero-background.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 260px auto;
  width: 250px;
  height: 250px;

  @supports (display: grid) {
    @media (min-width: 600px) {
      grid-column: 1;
      grid-row: 1 / span 2;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;

    @supports (object-fit: cover) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 0;
    }
  }
`;

const HeroUnderline = styled.p`
  font-size: 19px;
  font-family: $theme-font-primary;
  font-weight: $fw-light;
  text-align: center;
  max-width: $hero-child-max-width-small;

  @supports (display: grid) {
    @media (min-width: 600px) {
      max-width: none;
      text-align: left;

      grid-column: 2;
    }
  }
`;

export default function Hero({ title, imageSrc, underline }) {
  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroFigure>
        <img src={imageSrc} alt="Tim Bakkum Portrait" />
      </HeroFigure>
      <HeroUnderline>{underline}</HeroUnderline>
    </HeroContainer>
  );
}
