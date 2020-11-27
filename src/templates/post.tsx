import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import { Post as PostType, Location } from '../types';

type PostProps = {
  data: {
    ghostPost: PostType;
  };
  location: Location;
};

const Post: React.FC<PostProps> = ({ data, location }) => {
  const post = data.ghostPost;
  console.log(post);
  return (
    <>
      <MetaData data={data} location={location} type='article' />
      <Layout>
        <div>
          <article>
            {post.feature_image ? (
              <figure>
                <img
                  src={post.feature_image}
                  alt={post.title}
                  style={{ width: 250 }}
                />
              </figure>
            ) : null}
            <section>
              <h1>{post.title}</h1>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </article>
        </div>
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
