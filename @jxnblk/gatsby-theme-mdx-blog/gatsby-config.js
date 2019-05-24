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
        resolve: 'gatsby-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
          remarkPlugins,
        }
      }),
      {
        resolve: 'gatsby-plugin-theme-ui',
        options: {
          colorMode: 'light',
          theme: require.resolve('./src/theme.js'),
          components: require.resolve('./src/components.js'),
        }
      },
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
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: path.join(__dirname, `src`, `pages`),
        }
      },
    ].filter(Boolean)
  }
}
