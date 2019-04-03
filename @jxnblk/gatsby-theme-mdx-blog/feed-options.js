module.exports = {
  feeds: [
    {
      serialize: ({ query: { site, allMdx } }) => {
        return allMdx.edges
          .filter(({ node }) => !node.frontmatter.draft)
          .map(edge => {
            return {
              ...edge.node.frontmatter,
              description: edge.node.excerpt,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ "content:encoded": edge.node.html }]
            };
          });
      },
      query: `
      {
        allMdx(
          limit: 1000,
          sort: {
            order: DESC,
            fields: [frontmatter___date]
          }
          filter: {
            fields: { sourceInstanceName: { eq: "posts" } },
            frontmatter: { draft: { ne: true } }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              excerpt
              html
            }
          }
        }
      }
    `,
      output: `rss.xml`
    }
  ]
};
