import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import PostCard from '../components/PostCard/PostCard';

type IndexProps = {
  data: {
    allGhostPost: {
      edges: {
        node: {
          featured: boolean;
          id: number;
        };
      }[];
    };
  };
  location: {};
  pageContext: {};
};

const Index: React.FC<IndexProps> = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;
  const postList = posts.map(({ node }) =>
    node.featured ? <PostCard key={node.id} post={node} /> : null
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

// Index.propTypes = {
//   data: PropTypes.shape({
//     allGhostPost: PropTypes.object.isRequired,
//   }).isRequired,
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired,
//   }).isRequired,
//   pageContext: PropTypes.object,
// };

export default Index;

// TODO: Filter the featured posts here instead of in the component
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
