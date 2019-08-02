import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedPosts from './../components/featured-posts';
import { Container, Grid } from '@material-ui/core';
import Hero from '@tim/styleguide/src/elements/hero/hero';
import HeroImage from './../images/gatsby-astronaut.png';

const IndexPage = () => {
  return (
    <Layout>
      {/* @TODO change the SEO with own metadata */}
      <SEO
        title="Home"
        description="This is the personal website of Somebody"
      />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item>
            <Hero
              title="Tim Bakkum"
              underline="Amsterdam based front&#8209;end&nbsp;developer"
              imageSrc={HeroImage}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <FeaturedPosts />
      </Container>
    </Layout>
  );
};

export default IndexPage;
