const path = require('path')
const remarkPlugins = [
  require('remark-slug'),
  require('remark-unwrap-images'),
]
const feedOptions = require('./feed-options')

module.exports = (opts = {}) => {
  const {
    path: posts = 'src/posts',
    mdx = true,
  } = opts

  return {
    siteMetadata: {
      title: '@jxnblk/gatsby-theme-mdx-blog',
      description: 'Hyperminimal Gatsby theme for building blogs with MDX',
      author: 'Brent Jackson',
      siteUrl: 'http://example.com',
    },
    plugins: [
      mdx && ({
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
          remarkPlugins,
        }
      }),
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-emotion',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve(posts),
        }
      },
      {
        resolve: 'gatsby-plugin-feed',
        options: feedOptions
      },
    ].filter(Boolean)
  }
}
