import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid } from '@material-ui/core';
import Hero from './hero';
import DummyImage from './portrait-dummy.jpeg';
import readme from './README.md';

storiesOf('Features/Hero', module).add(
  'default',
  () => (
    <Container>
      <Grid container>
        <Grid item>
          <Hero
            title="Tim Bakkum"
            underline="Amsterdam based front‑end developer"
            imageSrc={DummyImage}
          />
        </Grid>
      </Grid>
    </Container>
  ),
  { notes: { markdown: readme } },
);
