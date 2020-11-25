import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/common/Pagination/Pagination';
import PostCard from '../components/PostCard/PostCard';

const Tag = ({ data, location, pageContext }) => {
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
  // return (
  //     <>
  //         <MetaData
  //             data={data}
  //             location={location}
  //             type="series"
  //         />
  //         <Layout>
  //             <div className="container">
  //                 <header className="tag-header">
  //                     <h1>{tag.name}</h1>
  //                     {tag.description ? <p>{tag.description}</p> : null }
  //                 </header>
  //                 <section className="post-feed">
  //                     {posts.map(({ node }) => (
  //                         // The tag below includes the markup for each post - components/common/PostCard.js
  //                         <PostCard key={node.id} post={node} />
  //                     ))}
  //                 </section>
  //                 <Pagination pageContext={pageContext} />
  //             </div>
  //         </Layout>
  //     </>
  // )
};

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
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
