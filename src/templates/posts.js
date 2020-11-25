import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';

const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  const postList = posts.map(({ node }) => (
    // <PostCard key={node.id} post={node} />
    // TODO: Replace with PostCard when creating it
    <div key={node.id}>{node.title}</div>
  ));
  return (
    <>
      <MetaData location={location} />
      <Layout>
        <section>{postList}</section>
        <Pagination pageContext={pageContext} />
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
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
