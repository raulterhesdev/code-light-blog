import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';

// import { Layout, PostCard, Pagination } from '../components/common'
// import { MetaData } from '../components/common/meta'

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;
  console.log(posts);
  // <MetaData location={location} />
  //         <Layout isHome={true}>
  //             <div className="container">
  //                 <section className="post-feed">
  //                     {posts.map(({ node }) => (
  //                         // The tag below includes the markup for each post - components/common/PostCard.js
  //                         <PostCard key={node.id} post={node} />
  //                     ))}
  //                 </section>
  //                 <Pagination pageContext={pageContext} />
  //             </div>
  //         </Layout>

  const postList = posts.map(({ node }) =>
    // <PostCard key={node.id} post={node} />
    node.featured ? <div key={node.id}>{node.title}</div> : null
  );
  return (
    <>
      <MetaData location={location} />
      <Layout>
        <section>{postList}</section>
      </Layout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostFeaturedQuery {
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
