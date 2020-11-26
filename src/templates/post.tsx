import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';

type PostProps = {
  data: {
    ghostPost: {};
  };
  location: {};
};

const Post: React.FC<PostProps> = ({ data, location }) => {
  const post = data.ghostPost;
  console.log(post);
  return (
    <>
      <MetaData data={data} location={location} type='article' />
      <Layout>
        <div>Post goes here</div>
      </Layout>
    </>
  );
  // return (
  //     <>
  //         <Layout>
  //             <div className="container">
  //                 <article className="content">
  //                     { post.feature_image ?
  //                         <figure className="post-feature-image">
  //                             <img src={ post.feature_image } alt={ post.title } />
  //                         </figure> : null }
  //                     <section className="post-full-content">
  //                         <h1 className="content-title">{post.title}</h1>

  //                         {/* The main post content */ }
  //                         <section
  //                             className="content-body load-external-scripts"
  //                             dangerouslySetInnerHTML={{ __html: post.html }}
  //                         />
  //                     </section>
  //                 </article>
  //             </div>
  //         </Layout>
  //     </>
  // )
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
