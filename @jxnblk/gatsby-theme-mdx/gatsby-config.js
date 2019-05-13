const gatsbyRemarkPlugins = [
  'gatsby-remark-slug',
  'gatsby-remark-unwrap-images',
  'gatsby-remark-responsive-iframe',
  'gatsby-remark-copy-linked-files',
  'gatsby-remark-numbered-footnotes',
  'gatsby-remark-smartypants',
  'gatsby-remark-code-titles',
  'gatsby-remark-prismjs',
]

const IS_LOCAL = process.cwd() === __dirname

const config = (opts = {}) => {
  const {
    mdx = true,
  } = opts

  return {
    plugins: [
      mdx && ({
        resolve: 'gatsby-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
          gatsbyRemarkPlugins,
        }
      })
    ].filter(Boolean)
  }
}

module.exports = IS_LOCAL ? config() : config
