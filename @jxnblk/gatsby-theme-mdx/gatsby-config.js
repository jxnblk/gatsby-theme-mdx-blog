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

/*
gatsbyRemarkPlugins: [
  {
    resolve: "gatsby-remark-images",
    options: {
      maxWidth: 1380,
      linkImagesToOriginal: false
    }
  },
  { resolve: "gatsby-remark-responsive-iframe" },
  { resolve: "gatsby-remark-copy-linked-files" },
  { resolve: "gatsby-remark-numbered-footnotes" },
  { resolve: "gatsby-remark-smartypants" },
  { resolve: "gatsby-remark-code-titles" },
  { resolve: "gatsby-remark-prismjs" }
]
*/

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
          // remarkPlugins,
        }
      })
    ].filter(Boolean)
  }
}

module.exports = IS_LOCAL ? config() : config
