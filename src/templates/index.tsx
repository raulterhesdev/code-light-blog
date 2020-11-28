import React from 'react';
import { graphql } from 'gatsby';

import MetaData from '../components/common/meta/MetaData';
import Layout from '../components/Layout/Layout';
import PostCard from '../components/PostCard/PostCard';

import siteConfig from '../utils/siteConfig';

import { Post, Location, PageContext } from '../types';

type IndexProps = {
  data: {
    allGhostPost: {
      edges: {
        node: Post;
      }[];
    };
  };
  location?: Location;
};

const Index: React.FC<IndexProps> = ({ data, location }) => {
  const posts = data.allGhostPost.edges;
  const featuredPosts: React.ReactNode[] = [];
  const latestsPosts: React.ReactNode[] = [];
  posts.map(({ node }, index) => {
    if (index < siteConfig.latestPosts) {
      latestsPosts.push(<PostCard key={node.id} post={node} />);
    } else if (
      featuredPosts.length < siteConfig.featuredPosts &&
      node.featured
    ) {
      featuredPosts.push(<PostCard key={node.id} post={node} />);
    }
  });

  console.log(posts);
  return (
    <>
      <MetaData location={location} />
      <Layout>
        <div style={{ display: 'flex' }}>
          <section>
            <h2>Latest posts</h2>
            {latestsPosts}
            {featuredPosts.length > 0 && (
              <>
                <h2>Other posts you might be interested in</h2>
                {featuredPosts}
              </>
            )}
          </section>
          <aside>Sidebar goes here</aside>
        </div>
      </Layout>
    </>
  );
};

export default Index;

// TODO: Filter the featured posts here instead of in the component
export const pageQuery = graphql`
  query GhostFeaturedQuery {
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
