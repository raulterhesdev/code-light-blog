const path = require(`path`);
const { postsPerPage } = require(`./src/utils/siteConfig`);
const { paginate } = require(`gatsby-awesome-pagination`);

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Extract query results
  const tags = result.data.allGhostTag.edges;
  const posts = result.data.allGhostPost.edges;

  // Load templates
  const indexTemplate = path.resolve(`./src/templates/index.tsx`);
  const postsTemplate = path.resolve(`./src/templates/posts.tsx`);
  const tagsTemplate = path.resolve(`./src/templates/tag.tsx`);
  const allTagsTemplate = path.resolve(`./src/templates/tags.tsx`);
  const postTemplate = path.resolve(`./src/templates/post.tsx`);

  // Create tag pages
  tags.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0;
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    // This part here defines, that our tag pages will use
    // a `/tags/:slug/` permalink.
    node.url = `/tags/${node.slug}/`;

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
      const nextPageNumber =
        currentPage + 1 > numberOfPages ? null : currentPage + 1;
      const previousPagePath = prevPageNumber
        ? prevPageNumber === 1
          ? node.url
          : `${node.url}page/${prevPageNumber}/`
        : null;
      const nextPagePath = nextPageNumber
        ? `${node.url}page/${nextPageNumber}/`
        : null;

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: tagsTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber: prevPageNumber,
          nextPageNumber: nextPageNumber,
          previousPagePath: previousPagePath,
          nextPagePath: nextPagePath,
        },
      });
    });
  });

  // Create post pages
  posts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/posts/${node.slug}/`;

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  // index page
  createPage({
    path: '/',
    component: indexTemplate,
    items: posts,
  });

  createPage({
    path: '/tags',
    component: allTagsTemplate,
    items: tags,
  });

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: postsTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/posts`;
      } else {
        return `/posts/page`;
      }
    },
  });
};
