import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

import { Post, Location } from '../types';

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
  return (
    <>
      <MetaData location={location} />
      <Layout location={location}>
        <Home posts={posts} />
      </Layout>
    </>
  );
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
