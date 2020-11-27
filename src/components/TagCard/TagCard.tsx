import { Link } from 'gatsby';
import React from 'react';

type TagCardProps = {
  name: string;
  slug: string;
};

const TagCard: React.FC<TagCardProps> = ({ name, slug }) => {
  return (
    <div>
      <span>{name}</span>
      <Link to={`/tags/${slug}`}>Go To</Link>
    </div>
  );
};

export default TagCard;
