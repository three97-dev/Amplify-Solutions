const path = require(`path`);

const { buildCareerUrl, buildBlogUrl } = require("./src/utils/buildUrl");

exports.sourceNodes = async (args) => {
  const { actions, getNodesByType } = args;
  const { createNodeField } = actions;

  const careers = getNodesByType("ContentfulCareer");
  const blogs = getNodesByType("ContentfulBlog");

  for (const career of careers) {
    createNodeField({
      node: career,
      name: "pageUrl",
      value: buildCareerUrl(career),
    });
  }

  for (const blog of blogs) {
    createNodeField({
      node: blog,
      name: "pageUrl",
      value: buildBlogUrl(blog),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulCareer {
        edges {
          node {
            fields {
              pageUrl
            }
            contentful_id
          }
        }
      }
      allContentfulBlog {
        edges {
          node {
            fields {
              pageUrl
            }
            contentful_id
          }
        }
      }
    }
  `);

  result.data.allContentfulCareer.edges.forEach((edge) => {
    const pageUrl = edge.node.fields.pageUrl;
    const id = edge.node.contentful_id;

    createPage({
      path: pageUrl,
      component: path.resolve(`src/templates/career.jsx`),
      context: {
        id,
      },
    });
  });

  result.data.allContentfulBlog.edges.forEach((edge) => {
    const pageUrl = edge.node.fields.pageUrl;
    const id = edge.node.contentful_id;

    createPage({
      path: pageUrl,
      component: path.resolve(`src/templates/blog.jsx`),
      context: {
        id,
      },
    });
  });
};
