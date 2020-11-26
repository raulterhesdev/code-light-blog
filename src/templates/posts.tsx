import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';
import PostCard from '../components/PostCard/PostCard';

type PostsProps = {
  data: {
    allGhostPost: {
      edges: {
        node: {
          featured: boolean;
          id: number;
          title: string;
        };
      }[];
    };
  };
  location: {};
  pageContext: {};
};

const Posts: React.FC<PostsProps> = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  const postList = posts.map(({ node }) => (
    <PostCard key={node.id} post={node} />
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

export default Posts;

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
