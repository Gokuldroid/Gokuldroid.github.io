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
        const categories = new Set();
        const noOfPostsInCategory = {};

        blogPosts.forEach((blogPost) => {
          blogPost.node.frontmatter.categories.forEach(cat => {
            categories.add(cat)
            noOfPostsInCategory[cat] = (noOfPostsInCategory[cat] || 0) + 1
          });

          if(blogPost.node.frontmatter.parentPath) {
            blogPost.context = {
              parentPath: blogPost.node.frontmatter.parentPath,
              isSeries: true
            };
          } else {
            blogPost.context = {
              parentPath: null
            };
          }
        });

        console.log(JSON.stringify(blogPosts));
        console.log(JSON.stringify(noOfPostsInCategory));


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
          return `/posts/${path}/`;
        }

        createPagePerItem({
          createPage,
          items: blogPosts,
          component: blogPost,
          itemToPath: itemToPath,
          itemToId: "node.id"
        });

        
       

        const postsPerPage = 5;
        const blogCategoryLayout = path.resolve("./src/components/module/blog/posts/category/index.jsx");


        categories.forEach((cat, i) => {
          const link = `/blog/category/${cat}`
          Array.from({
            length: Math.ceil(noOfPostsInCategory[cat] / postsPerPage),
          }).forEach((_, i) => {
            const path = i === 0 ? link : `${link}/page/${i + 1}`;
            createPage({
              path,
              component: blogCategoryLayout,
              context: {
                category: cat,
                skip: i * postsPerPage,
                limit: postsPerPage,
                currentPage: i + 1,
                humanPageNumber: i + 1,
                numberOfPages: Math.ceil(noOfPostsInCategory[cat] / postsPerPage),
              },
            })
          })
        })
      })
    );
  });
};