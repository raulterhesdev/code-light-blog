import React from 'react';
import { graphql, Link } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';
import PostCard from '../components/PostCard/PostCard';
import { Location, PageContext, Post, Tag as TagType } from '../types';
import { Section, SectionHeader } from '../components/Home/Home.styles';

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

      <Layout location={location}>
        <header>
          <SectionHeader>
            {tag.name}
            {tag.description ? <p>{tag.description}</p> : null}
          </SectionHeader>
        </header>
        <Section>
          {postList}
          <Pagination pageContext={pageContext} />
        </Section>
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
