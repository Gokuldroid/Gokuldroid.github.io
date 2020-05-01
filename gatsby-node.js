const pagination = require('gatsby-awesome-pagination');
const path = require('path');
const { paginate, createPagePerItem } = pagination;
const allMarkdownQuery = require ('./build-scripts/queries/all-markdown');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // We return a promise immediately
  return new Promise((resolve, reject) => {
    // Start by creating all the blog pages
    const blogPost = path.resolve("./src/components/module/blog/post/index.jsx");
    const blogIndex = path.resolve("./src/components/module/blog/posts/index.jsx");
    resolve(
      graphql(allMarkdownQuery).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Get an array of posts from the query result
        const blogPosts = result.data.allMarkdownRemark.edges;

        // Create the blog index pages like `/blog`, `/blog/2`, `/blog/3`, etc.
        // The first page will have 3 items and each following page will have 10
        // blog posts and a link to the next and previous pages.

        const pathPrefix = ({ pageNumber }) => pageNumber === 0 ? '/blog' : '/blog/page'

        paginate({
          createPage,
          items: blogPosts,
          component: blogIndex,
          itemsPerPage: 10,
          itemsPerFirstPage: 5,
          pathPrefix: pathPrefix
        });

        const itemToPath = (node) => {
          if(!node) return;
          var path = node.node.frontmatter.path;
          return `/posts/${path}`;
        }

        createPagePerItem({
          createPage,
          items: blogPosts,
          component: blogPost,
          itemToPath: itemToPath,
          itemToId: "node.id"
        });

        const categories = new Set();
        blogPosts.forEach((blogPost) => {
          blogPost.node.frontmatter.categories.forEach(cat => categories.add(cat))
        });
        
      })
    );
  });
};