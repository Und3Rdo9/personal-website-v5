import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleCard from '@tim/styleguide/src/features/card/article-card';
import { Typography, Grid } from '@material-ui/core';
import GatsbyLink from 'gatsby-link';

const featuredPostsQuery = graphql`
  query featuredPosts {
    gcms {
      allPosts(
        orderBy: dateAndTime_DESC
        first: 3
        filter: { isPublished: true }
      ) {
        title
        summary
        slug
        coverImage {
          url
        }
      }
    }
  }
`;

const FeaturedPosts = () => {
  const featuredPosts = useStaticQuery(featuredPostsQuery);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2">
          Latest from the blog
        </Typography>
      </Grid>
      {featuredPosts.gcms.allPosts!.map((post: any, i: number) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <ArticleCard
            title={post.title}
            summary={post.summary}
            url={`/blog/${post.slug}`}
            image={{ url: post.coverImage.url, alt: post.title }}
            linkComponent={GatsbyLink}
            imageComponent="img"
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default FeaturedPosts;
