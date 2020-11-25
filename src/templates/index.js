import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';

const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  const postList = posts.map(({ node }) =>
    // <PostCard key={node.id} post={node} />
    // TODO: replace here with the PostCard component
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
