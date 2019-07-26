import React from 'react';
import { styled } from '@material-ui/core/styles';

import HeroBackground from './../../../assets/images/hero-background.svg';

export interface HeroFigureProps {
  imageSrc: string;
}

// @TODO refactor this into reusable avatar element?
export const HeroFigure = styled(({ imageSrc, ...rest }: HeroFigureProps) => (
  <figure {...rest}>
    <img src={imageSrc} alt="Amsterdam based front-end developer" />
  </figure>
))(({ theme }) => {
  return {
    display: 'block',
    margin: '0',
    padding: `30px 30px 0 0`,
    backgroundColor: 'transparent',
    backgroundImage: `url(${HeroBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: '260px auto',
    width: '290px',
    height: '250px',

    '@supports (display: grid)': {
      [theme.breakpoints.up('sm')]: {
        gridColumn: 1,
        gridRow: '1 / span 2',
      },
    },
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',

      '@supports (object-fit: cover)': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '0 0',
      },
    },
  };
});

export default HeroFigure;
