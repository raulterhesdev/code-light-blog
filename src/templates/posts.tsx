import React from 'react';
import { graphql, Link } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';
import PostCard from '../components/PostCard/PostCard';
import { Post, Location, PageContext } from '../types';
import { Section, SectionHeader } from '../components/Home/Home.styles';

type PostsProps = {
  data: {
    allGhostPost: {
      edges: {
        node: Post;
      }[];
    };
  };
  location: Location;
  pageContext: PageContext;
};

const Posts: React.FC<PostsProps> = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  const postList = posts.map(({ node }) => (
    <PostCard key={node.id} post={node} />
  ));
  return (
    <>
      <MetaData location={location} />
      <Layout location={location}>
        <Section>
          {postList}
          <Pagination pageContext={pageContext} />
        </Section>
      </Layout>
    </>
  );
};

export default Posts;

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
