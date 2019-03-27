const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const Debug = require('debug')
const mkdirp = require('mkdirp')

const debug = Debug('@jxnblk/gatsby-theme-mdx-blog')

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()

  const dir = path.join(program.directory, `src/posts`)

  debug(`Initializing ${dir} directory`)
  mkdirp.sync(dir)
}

exports.onCreateNode = ({ node, actions, getNode }, opts = {}) => {
  const {
    name = 'blog'
  } = opts
  if (node.internal.type !== 'Mdx') return

  const value = '/' + name + createFilePath({ node, getNode })
  actions.createNodeField({
    name: 'slug',
    node,
    value,
  })
}

exports.createPages = async ({
  graphql,
  actions,
}, opts = {}) => {
  const {
    name = 'blog',
    pageSize = 12,
  } = opts

  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              draft
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(result.errors)
    return
  }
  const posts = result.data.allMdx.edges.map(edge => edge.node)

  posts.forEach(post => {
    actions.createPage({
      path: post.fields.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id,
      },
    })
  })

  // pagination
  const limit = pageSize
  const length = Math.ceil(posts.length / limit)

  Array.from({ length }).forEach((_, i) => {
    const previousIndex = i
    const nextIndex = i + 2
    const previous = (i > 0) && (
      previousIndex === 1
        ? path.join('/', name)
        : path.join('/', name, previousIndex + '')
    )

    // const next = nextIndex <= length && `/${name}/${nextIndex}`
    const next = nextIndex <= length && path.join('/', name, nextIndex + '')
    actions.createPage({
      // path: i === 0 ? `/${name}` : `/${name}/${i + 1}`,
      path: i === 0 ? '/' + name : path.join('/', name, (i + 1) + ''),
      component: require.resolve('./src/templates/index.js'),
      context: {
        previous,
        next,
        limit,
        skip: i * limit,
      },
    })
  })
}
