import { Link } from 'gatsby';
import React from 'react';

import { Post } from '../../types';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, slug } = post;
  return (
    <div>
      <span>{title}</span>
      <Link to={`/posts/${slug}`}>Go To</Link>
    </div>
  );
};

export default PostCard;
