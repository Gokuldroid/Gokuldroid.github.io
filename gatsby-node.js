const pagination = require("gatsby-awesome-pagination")
const path = require("path")
const { paginate, createPagePerItem } = pagination
const allMarkdownQuery = require("./build-scripts/queries/all-markdown")

// Normalize a tag/category for case-insensitive grouping & matching.
const normalize = (s) => (s || "").trim().toLowerCase()

// The set of keywords (tags + categories, normalized) that describe a post.
// Used to score how "related" two posts are.
const keywordsOf = (node) => {
  const fm = node.frontmatter
  const all = [...(fm.tags || []), ...(fm.categories || [])]
  return new Set(all.map(normalize).filter(Boolean))
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // We return a promise immediately
  return new Promise((resolve, reject) => {
    // Start by creating all the blog pages
    const blogPost = path.resolve("./src/components/module/blog/post/index.jsx")
    const blogIndex = path.resolve(
      "./src/components/module/blog/posts/index.jsx"
    )
    resolve(
      graphql(allMarkdownQuery).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Get an array of posts from the query result
        const blogPosts = result.data.allMarkdownRemark.edges
        const categories = new Set()
        const noOfPostsInCategory = {}

        // Group posts by normalized tag. Keeps a display label (first-seen
        // original casing) and the post ids for each tag.
        const tagGroups = {}

        blogPosts.forEach((blogPost) => {
          blogPost.node.frontmatter.categories.forEach((cat) => {
            categories.add(cat)
            noOfPostsInCategory[cat] = (noOfPostsInCategory[cat] || 0) + 1
          })

          ;(blogPost.node.frontmatter.tags || []).forEach((tag) => {
            const key = normalize(tag)
            if (!key) return
            if (!tagGroups[key]) {
              tagGroups[key] = { display: tag.trim(), ids: [] }
            }
            tagGroups[key].ids.push(blogPost.node.id)
          })

          if (blogPost.node.frontmatter.parentPath) {
            blogPost.context = {
              parentPath: blogPost.node.frontmatter.parentPath,
              isSeries: true,
            }
          } else {
            blogPost.context = {
              parentPath: null,
            }
          }
        })

        // Compute related posts for each post by keyword (tag + category)
        // overlap. Falls back to nothing if no overlap exists.
        const keywordCache = blogPosts.map((p) => keywordsOf(p.node))
        blogPosts.forEach((blogPost, i) => {
          const mine = keywordCache[i]
          const scored = []
          blogPosts.forEach((other, j) => {
            if (i === j) return
            let score = 0
            keywordCache[j].forEach((k) => {
              if (mine.has(k)) score += 1
            })
            if (score > 0) {
              scored.push({ score, index: j, node: other.node })
            }
          })
          // Highest overlap first; blogPosts is already sorted date DESC so a
          // stable sort keeps newer posts ahead on ties.
          scored.sort((a, b) => b.score - a.score)
          blogPost.context.relatedPosts = scored.slice(0, 3).map((s) => ({
            title: s.node.frontmatter.title,
            path: s.node.frontmatter.path,
            date: s.node.frontmatter.date,
          }))
        })

        // Create the blog index pages: `/` (home), `/page/2`, `/page/3`, etc.
        // The first page will have 5 items and each following page will have 10
        // blog posts and a link to the next and previous pages.

        const pathPrefix = ({ pageNumber }) =>
          pageNumber === 0 ? "/" : "/page"

        paginate({
          createPage,
          items: blogPosts,
          component: blogIndex,
          itemsPerPage: 10,
          itemsPerFirstPage: 5,
          pathPrefix: pathPrefix,
        })

        const itemToPath = (node) => {
          if (!node) return
          var path = node.node.frontmatter.path
          return `/posts/${path}/`
        }

        createPagePerItem({
          createPage,
          items: blogPosts,
          component: blogPost,
          itemToPath: itemToPath,
          itemToId: "node.id",
        })

        const postsPerPage = 5
        const blogCategoryLayout = path.resolve(
          "./src/components/module/blog/posts/category/index.jsx"
        )

        categories.forEach((cat, i) => {
          const link = `/blog/category/${cat}`
          Array.from({
            length: Math.ceil(noOfPostsInCategory[cat] / postsPerPage),
          }).forEach((_, i) => {
            const path = i === 0 ? link : `${link}/page/${i + 1}`
            createPage({
              path,
              component: blogCategoryLayout,
              context: {
                category: cat,
                skip: i * postsPerPage,
                limit: postsPerPage,
                currentPage: i + 1,
                humanPageNumber: i + 1,
                numberOfPages: Math.ceil(
                  noOfPostsInCategory[cat] / postsPerPage
                ),
              },
            })
          })
        })

        // Create paginated tag pages: `/blog/tag/<tag>/`, `/blog/tag/<tag>/page/2`, ...
        const blogTagLayout = path.resolve(
          "./src/components/module/blog/posts/tag/index.jsx"
        )

        Object.keys(tagGroups).forEach((key) => {
          const { display, ids } = tagGroups[key]
          const numberOfPages = Math.ceil(ids.length / postsPerPage)
          const link = `/blog/tag/${key}`
          Array.from({ length: numberOfPages }).forEach((_, i) => {
            const pagePath = i === 0 ? link : `${link}/page/${i + 1}`
            createPage({
              path: pagePath,
              component: blogTagLayout,
              context: {
                tag: display,
                ids,
                skip: i * postsPerPage,
                limit: postsPerPage,
                currentPage: i + 1,
                humanPageNumber: i + 1,
                numberOfPages,
              },
            })
          })
        })
      })
    )
  })
}
