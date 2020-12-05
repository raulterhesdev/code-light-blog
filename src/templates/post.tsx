import React from 'react';
import { graphql, Link } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import { Post as PostType, Location } from '../types';
import PostArticle from '../components/Post/Post';

type PostProps = {
  data: {
    ghostPost: PostType;
  };
  location: Location;
};

const Post: React.FC<PostProps> = ({ data, location }) => {
  const post = data.ghostPost;
  return (
    <>
      <MetaData data={data} location={location} type='article' />
      <Layout location={location}>
        <PostArticle post={post}></PostArticle>
      </Layout>
    </>
  );
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
