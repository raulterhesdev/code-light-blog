import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';
import PostCard from '../components/PostCard/PostCard';
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
  return (
    <>
      <MetaData location={location} />
      <Layout>
        <p>all tags</p>
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
