import React from 'react';

type PostCardProps = {
  post: {
    title: string;
  };
};
const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default PostCard;
