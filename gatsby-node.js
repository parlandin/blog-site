const path = require("path");
const readingTime = require("reading-time");
const slugify = require("slugify");

const addReadingTime = (result) => {
  const nodes = result.data.allMdx.nodes;

  nodes.forEach((node) => {
    const data = readingTime(node.body);

    node.fields = {
      readingTime: {
        minutes: data.minutes,
      },
    };

    delete node.body;
  });

  result.data.allMdx.nodes = nodes;

  return result;
};

const getAllPosts = async ({ graphql }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
            date(formatString: "MMMM D, YYYY")
            title
            tags
          }
          body
          id
        }
      }
    }
  `);

  return addReadingTime(result);
};

const createBlogListPage = async ({ createPage, result }) => {
  const posts = result.data?.allMdx?.nodes;

  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog/index.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

const createSearchPage = async ({ result, createPage }) => {
  const templatePath = path.resolve("./src/templates/search/index.tsx");
  const uniqueSlug = (tag) => slugify(tag, { lower: true });

  const allData = result.data.allMdx.nodes;

  const ListOfTags = result.data.allMdx.nodes.reduce((acc, node) => {
    return acc.concat(node.frontmatter.tags);
  }, []);

  const formalizeTags = ListOfTags.reduce((acc, tag) => {
    if (acc[tag]) {
      acc[tag] = {
        count: acc[tag].count + 1,
        slug: `search/tag/${uniqueSlug(tag)}`,
      };
    } else {
      acc[tag] = { count: 1, slug: `search/tag/${uniqueSlug(tag)}` };
    }
    return acc;
  }, {});

  const tags = Object.keys(formalizeTags);

  Array.from(tags).forEach((tag) => {
    createPage({
      path: `search/tag/${uniqueSlug(tag)}`,
      component: templatePath,
      context: {
        data: allData.filter((node) => node.frontmatter.tags.includes(tag)),
        tag: formalizeTags,
      },
    });
  });

  createPage({
    path: `/search`,
    component: templatePath,
    context: {
      data: allData,
      tag: formalizeTags,
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await getAllPosts({ graphql });

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  await createBlogListPage({ createPage, result });
  await createSearchPage({ result, createPage });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const data = readingTime(node.body);

    createNodeField({
      node,
      name: "readingTime",
      value: data,
    });
  }
};
