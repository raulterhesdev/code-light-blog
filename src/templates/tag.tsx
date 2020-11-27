import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';
import PostCard from '../components/PostCard/PostCard';
import { Location, PageContext, Post, Tag as TagType } from '../types';

type TagProps = {
  data: {
    allGhostPost: {
      edges: {
        node: Post;
      }[];
    };
    ghostTag: TagType;
  };
  location: Location;
  pageContext: PageContext;
};

const Tag: React.FC<TagProps> = ({ data, location, pageContext }) => {
  const tag = data.ghostTag;
  const posts = data.allGhostPost.edges;

  const postList = posts.map(({ node }) => (
    <PostCard key={node.id} post={node} />
  ));

  return (
    <>
      <MetaData data={data} location={location} type='series' />
      <Layout>
        <header>
          <h1>{tag.name}</h1>
          {tag.description ? <p>{tag.description}</p> : null}
        </header>
        <section>{postList}</section>
        <Pagination pageContext={pageContext} />
      </Layout>
    </>
  );
};

export default Tag;

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
