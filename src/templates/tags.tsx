import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import TagCard from '../components/TagCard/TagCard';
import { Location, PageContext, Post, Tag as TagType } from '../types';

type TagsProps = {
  data: {
    allGhostTag: {
      edges: {
        node: {
          name: string;
          slug: string;
        };
      }[];
    };
  };
  location?: Location;
};

const Tags: React.FC<TagsProps> = ({ data, location }) => {
  console.log(data.allGhostTag);
  const tagList = data.allGhostTag.edges.map(({ node }) => (
    <TagCard key={node.name} name={node.name} slug={node.slug} />
  ));
  return (
    <>
      <MetaData location={location} />
      <Layout>
        <p>All tags</p>
        {tagList}
      </Layout>
    </>
  );
};

export default Tags;

export const pageQuery = graphql`
  query GhostTagsQuery {
    allGhostTag {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;
