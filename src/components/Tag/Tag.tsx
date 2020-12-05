import React from 'react';
import { Tag as TagType } from '../../types';
import { StyledTag } from './Tag.styles';
import { Link } from 'gatsby';

type TagProps = {
  tag: TagType;
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <StyledTag key={tag.slug}>
      <Link to={`/tags/${tag.slug}`}>{tag.name}</Link>
    </StyledTag>
  );
};

export default Tag;
