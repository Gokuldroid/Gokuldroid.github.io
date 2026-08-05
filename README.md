# Code From Dude

Source for [codefromdude.com](https://codefromdude.com), Gokul Prabhu's
personal software engineering blog. The site is built with Gatsby 5 and
published through GitHub Pages.

## Editorial Direction

The blog focuses on constructive, experience-based writing about:

- Software engineering craft
- Technical concepts and implementation details
- Debugging, performance, reliability, and operations
- Tools and practices that make engineers more effective
- Learning, judgment, and responsible use of AI
- Organizational lessons when they help people build better software

Articles should begin with a concrete problem or observation, explain the
tradeoffs with examples, and leave the reader with a principle they can apply.
Prefer firsthand lessons, experiments, code, measurements, and specific
decisions over abstract advice.

## Repository Layout

- `contents/posts/`: Markdown blog posts
- `static/assets/blog/`: Images and other post assets
- `src/components/`: React components
- `src/styles/`: Global and syntax-highlighting styles
- `gatsby-config.js`: Site metadata, Markdown processing, RSS, and sitemap
- `gatsby-node.js`: Post, category, tag, pagination, series, and related pages

## Development

Use Node `22.22.3` and npm. Install dependencies from the lockfile:

```sh
npm ci
```

Start Gatsby at `http://localhost:8000`:

```sh
npm run develop
```

Alternatively, start development through Portless:

```sh
npm run develop:portless
```

Format changes under `src/` and build the complete site before publishing:

```sh
npm run format
npm run build
```

Do not edit generated files under `.cache/` or `public/`.

## Writing

Normal posts live at `contents/posts/YYYY-MM-DD-<slug>.md`. The frontmatter
`path` is the canonical public slug and must be unique, lowercase kebab-case,
and contain no leading or trailing slash.

Internal article links use `/posts/<path>/`. Post-specific assets belong in
`static/assets/blog/<path>/` and are referenced as
`/assets/blog/<path>/<file>`.

## Publishing

Source changes belong on the `sources` branch. The `master` branch contains the
generated GitHub Pages site.

Publishing is an explicit operation:

```sh
npm run publish
```

This cleans and builds the site with prefix paths, then deploys `public/` to
`master`. Commit source changes and confirm the working tree is clean before
publishing.
