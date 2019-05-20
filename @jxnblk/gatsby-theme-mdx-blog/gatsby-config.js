const path = require('path')
const pkg = require('./package.json')
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
        resolve: 'gatsby-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
          remarkPlugins,
        }
      }),
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

      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [
            pkg.name,
          ]
        }
      },
    ].filter(Boolean)
  }
}
