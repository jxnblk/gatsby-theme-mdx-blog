
# @jxnblk/gatsby-theme-mdx-blog

**WIP**
Hyperminimal Gatsby theme for building blogs with MDX

Used in https://jxnblk.com/blog

```sh
npm i @jxnblk/gatsby-theme-mdx-blog
```

## Features

- [MDX][]
- [Theme UI][]
- [Color modes][]

[mdx]: https://mdxjs.com
[theme ui]: https://theme-ui.com
[color modes]: https://theme-ui.com/color-modes

## Theming

The blog can be completely themed using Theme UI.

TK

## Options

The following options can be passed to the theme in your site's `gatsby-config.js` file.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: '@jxnblk/gatsby-theme-mdx-blog',
      options: {
        name: 'writing',
        path: 'src/content',
        pageSize: 16,
      }
    }
  ]
}
```

- `name`: path for rendered pages in your site, default `''`
- `path`: path for source folder of MDX blog posts, default `src/posts`
- `pageSize`: number of posts to display per page

:warning: if you change the `path`, make sure you have content already since gatsby relies on having content to generate the frontmatter properly.

MIT License
