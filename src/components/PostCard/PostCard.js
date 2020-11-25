import React from 'react';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  return <div>{post.title}</div>;
};

PostCard.propTypes = {};

export default PostCard;
