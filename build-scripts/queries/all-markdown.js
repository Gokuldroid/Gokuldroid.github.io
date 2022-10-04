module.exports = `
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          path
          parentPath
          date
          categories
        }
      }
    }
  }
}
`;