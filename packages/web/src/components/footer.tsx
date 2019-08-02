import React from 'react';
import { Container, Typography } from '@material-ui/core';

// @TODO move to styleguide
// @TODO add prop interface
const Footer = () => (
  <Container maxWidth="lg">
    <Typography variant="h6" align="center" gutterBottom>
      Tim Bakkum - front-end developer in Amsterdam
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Typography>
  </Container>
);

export default Footer;
