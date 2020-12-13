import React from 'react';
import { Post } from '../../types';
import PostCard from '../PostCard/PostCard';
import FeaturedPost from './FeaturedPost/FeaturedPost';
import { SectionHeader, Section } from './Home.styles';
import siteConfig from '../../utils/siteConfig';

type HomeProps = {
  posts: { node: Post }[];
};

const Home: React.FC<HomeProps> = ({ posts }) => {
  const featuredPosts: React.ReactNode[] = [];
  let latestsPost: React.ReactNode;

  posts.map(({ node }, index) => {
    if (index < siteConfig.latestPosts) {
      latestsPost = <FeaturedPost key={node.id} post={node} />;
    } else if (
      featuredPosts.length < siteConfig.featuredPosts &&
      node.featured
    ) {
      featuredPosts.push(<PostCard key={node.id} post={node} />);
    }
  });

  return (
    <>
      <SectionHeader>Latest post</SectionHeader>
      {latestsPost}
      {featuredPosts.length > 0 && (
        <>
          <SectionHeader>Other posts you might be interested in</SectionHeader>
          <Section>{featuredPosts}</Section>
        </>
      )}
    </>
  );
};

export default Home;
