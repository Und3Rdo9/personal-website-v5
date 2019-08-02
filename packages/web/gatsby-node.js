/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// @TODO fix linting, use ts lint
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query getAllPosts($skip: Int!) {
        gcms {
          allPosts(
            orderBy: dateAndTime_DESC
            skip: $skip
            filter: { isPublished: true }
          ) {
            slug
          }
        }
      }
    `,
    {
      skip: 0,
    },
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.gcms.allPosts.forEach(({ slug }) => {
      console.log(`creating posts/${slug}`)
      createPage({
        // Path for this page — required
        path: `posts/${slug}`,
        component: blogPostTemplate,
        context: {
          slug,
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        },
      ],
    },
  })
}
