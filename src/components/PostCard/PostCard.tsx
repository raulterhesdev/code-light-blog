import React from 'react';

import { Post } from '../../types';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default PostCard;
