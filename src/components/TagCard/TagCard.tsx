import { Link } from 'gatsby';
import React from 'react';
import { Tag } from '../../types';
import { CtaWrapper, Description, Title, Wrapper } from './TagCard.styles';
import Cta from '../../components/common/CTA/CTA';

type TagCardProps = {
  tag: Tag;
};

export const TagCard: React.FC<TagCardProps> = ({ tag }) => {
  const { name, description, slug } = tag;

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Cta>
        <Link to={`/tags/${slug}`}>
          <span>&rarr;</span> Go to posts
        </Link>
      </Cta>
    </Wrapper>
  );
};

export default TagCard;
