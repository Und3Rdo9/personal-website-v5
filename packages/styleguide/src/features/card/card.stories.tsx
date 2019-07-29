import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Container } from '@material-ui/core';
import dummyImage from './dummy-image.jpg';
import ArticleCard from './article-card';

const dummyPost = {
  slug: '/test',
  title:
    'Good internationalisation practices for web developers, part 2: text direction',
  summary:
    "Did you ever have to develop a multilingual website that supports different text directions? Let's have a look at the techniques involved and the most common issues that can arise.",
  coverImage: {
    url: dummyImage,
  },
};

storiesOf('Features/Card', module).add('ArticleCard', () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {[0, 1, 2].map(i => (
          <Grid key={i} item xs={12} sm={5} md={3}>
            <ArticleCard
              title={dummyPost.title}
              summary={dummyPost.summary}
              image={{ url: dummyPost.coverImage.url, alt: dummyPost.title }}
              imageComponent="img"
              linkComponent="a"
              url={dummyPost.slug}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});
