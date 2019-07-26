import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

export const HeroTitle = styled(({ ...props }: TypographyProps) => (
  <Typography {...props} variant="h1" />
))(({ theme }) => {
  return {
    textAlign: 'center',
    maxWidth: '290px',
    fontSize: theme.typography.pxToRem(51),
    '@supports (display: grid)': {
      [theme.breakpoints.up('sm')]: {
        maxWidth: 'none',
        textAlign: 'left',
        alignSelf: 'end',
        marginBottom: 0,
        gridColumn: 2,
      },
    },
  };
});

export default HeroTitle;
