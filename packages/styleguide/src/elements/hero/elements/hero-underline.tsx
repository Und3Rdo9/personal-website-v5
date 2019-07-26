import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

export const HeroUnderline = styled(({ ...props }: TypographyProps) => (
  <Typography {...props} variant="subtitle1" />
))(({ theme }) => {
  return {
    textAlign: 'center',
    maxWidth: '290px',
    '@supports (display: grid)': {
      [theme.breakpoints.up('sm')]: {
        maxWidth: 'none',
        textAlign: 'left',
        gridColumn: 2,
      },
    },
  };
});

export default HeroUnderline;
