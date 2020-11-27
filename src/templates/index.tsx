import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import PostCard from '../components/PostCard/PostCard';

import { Post, Location, PageContext } from '../types';

type IndexProps = {
  data: {
    allGhostPost: {
      edges: {
        node: Post;
      }[];
    };
  };
  location?: Location;
};

const Index: React.FC<IndexProps> = ({ data, location }) => {
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
