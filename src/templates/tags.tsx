import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import TagCard from '../components/TagCard/TagCard';
import { Location, PageContext, Post, Tag, Tag as TagType } from '../types';
import { Section, SectionHeader } from '../components/Home/Home.styles';

type TagsProps = {
  data: {
    allGhostTag: {
      edges: {
        node: TagType;
      }[];
    };
  };
  location?: Location;
};

const Tags: React.FC<TagsProps> = ({ data, location }) => {
  const tagList = data.allGhostTag.edges.map(({ node }) => (
    <TagCard key={node.name} tag={node} />
  ));
  return (
    <>
      <MetaData location={location} />

      <Layout location={location}>
        <SectionHeader>All tags</SectionHeader>
        <Section>{tagList}</Section>
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
          description
        }
      }
    }
  }
`;
