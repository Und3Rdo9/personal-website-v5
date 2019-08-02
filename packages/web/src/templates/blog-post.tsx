import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { Typography } from '@material-ui/core';

export const query = graphql`
  query post($slug: String!) {
    gcms {
      Post(slug: $slug) {
        title
        authors {
          name
        }
        dateAndTime
        tags
        content
        coverImage {
          url
        }
        metaDescription
      }
    }
  }
`;

const BlogPost = props => {
  console.log(props);
  return (
    <Layout>
      <Typography variant="h1">{props.data.gcms.Post.title}</Typography>
      <ReactMarkdown>{props.data.gcms.Post.content}</ReactMarkdown>
    </Layout>
  );
};

export default BlogPost;
