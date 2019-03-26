const path = require('path')
const pkg = require('./package.json')

module.exports = (opts = {}) => {
  const posts = opts.path || 'src/posts'

  return {
    siteMetadata: {
      title: '@jxnblk/gatsby-theme-mdx-blog',
      description: 'Hyperminimal Gatsby theme for building blogs with MDX',
      author: 'Brent Jackson',
    },
    plugins: [
      {
        resolve: 'gatsby-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
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
        // This will eventually be the default
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`),
        },
      },

      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [
            pkg.name,
          ]
        }
      },
    ]
  }
}
