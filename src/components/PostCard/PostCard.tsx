import { Link } from 'gatsby';
import React from 'react';
import { Post } from '../../types';
import {
  Article,
  Title,
  ImageWrapper,
  Image,
  Container,
  Header,
  PublishedDate,
  TagWrapper,
} from './PostCard,styles';
import Tag from '../Tag/Tag';
import { CtaWrapper } from '../Home/FeaturedPost/FeaturedPost.styles';
import CTA from '../common/CTA/CTA';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, slug, created_at_pretty, tags, feature_image } = post;
  return (
    <Article>
      <Container>
        <ImageWrapper>
          <Image src={feature_image} alt={title} />
        </ImageWrapper>
        <div>
          <Header>
            <Title>{title}</Title>
            <PublishedDate>{created_at_pretty}</PublishedDate>
          </Header>
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

export default PostCard;
