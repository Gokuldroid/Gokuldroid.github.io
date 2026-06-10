module.exports = `
{
  allMarkdownRemark(
    sort: { frontmatter: { date: DESC } }
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