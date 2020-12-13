import { Link } from 'gatsby';
import React from 'react';

import { Post } from '../../../types';
import Tag from '../../Tag/Tag';

import {
  Article,
  Title,
  ImageWrapper,
  Image,
  CtaWrapper,
  Container,
  Header,
  PublishedDate,
  ShortText,
  TagWrapper,
} from './FeaturedPost.styles';
import CTA from '../../common/CTA/CTA';

type FeaturedPostProps = {
  post: Post;
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const {
    title,
    slug,
    published_at_pretty,
    tags,
    feature_image,
    excerpt,
  } = post;
  return (
    <Article>
      <Container>
        <ImageWrapper>
          <Image src={feature_image} alt={title} />
        </ImageWrapper>
        <div>
          <Header>
            <Title>{title}</Title>
            <PublishedDate>{published_at_pretty}</PublishedDate>
          </Header>
          <ShortText>{excerpt}</ShortText>
          <TagWrapper>
            {tags.map((tag) => (
              <Tag key={tag.slug} tag={tag} />
            ))}
          </TagWrapper>
          <CtaWrapper>
            <CTA>
              <Link to={`/posts/${slug}`}>
                <span>&rarr;</span> Read More
              </Link>
            </CTA>
          </CtaWrapper>
        </div>
      </Container>
    </Article>
  );
};

export default FeaturedPost;
