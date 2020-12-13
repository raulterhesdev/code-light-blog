import React, { useEffect, useState } from 'react';
import { Post as PostType } from '../../types';
import Tag from '../Tag/Tag';

import {
  Article,
  Image,
  ImageWrapper,
  MainSection,
  Title,
  ArticleBody,
  Date,
  TagWrapper,
  CopyNotice,
} from './Post.styles';

type PostProps = {
  post: PostType;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const [showCopyNotice, setShowCopyNotice] = useState(false);

  useEffect(() => {
    const articleLinks = document.querySelectorAll('#main-article a');
    articleLinks.forEach((link) => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }, []);

  useEffect(() => {
    const codeBlocks = document.querySelectorAll('#main-article pre');

    const copyTextToClipboard = (e) => {
      var text = e.target.nextSibling.innerText;
      var elem = document.createElement('textarea');
      document.body.appendChild(elem);
      elem.value = text;
      elem.select();
      document.execCommand('copy');
      document.body.removeChild(elem);
      setShowCopyNotice(true);
      setTimeout(() => {
        setShowCopyNotice(false);
      }, 2000);
    };

    codeBlocks.forEach((block) => {
      //@ts-ignore
      const language = block.lastChild.classList[0].split('-')[1];

      const copyButton = document.createElement('span');
      copyButton.innerText = 'Copy';
      copyButton.classList.add('copy-button');
      copyButton.addEventListener('click', copyTextToClipboard);

      const languageSign = document.createElement('span');
      languageSign.innerText = language;
      languageSign.classList.add('language-sign');

      block.prepend(languageSign, copyButton);
    });

    return () => {
      document.removeEventListener('click', copyTextToClipboard);
    };
  }, []);

  useEffect(() => {
    const codeBlocks = document.querySelectorAll('#main-article pre code');

    codeBlocks.forEach((block) => block.classList.add('prettyprint'));
  }, []);

  useEffect(() => {
    //@ts-ignore
    window.gtag('event', `${post.title} - start`);

    const getScrollValues = () => {
      const pageHeight = document.body.scrollHeight;
      const currentScrollPoint = window.scrollY + window.innerHeight;

      return [pageHeight, currentScrollPoint];
    };

    const scrollHandler = () => {
      const [pageHeight, currentScrollPoint] = getScrollValues();
      if (currentScrollPoint >= pageHeight) {
        // @ts-ignore
        window.gtag('event', `${post.title} - finish`);
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Article>
      {showCopyNotice && <CopyNotice>Copied to clipboard</CopyNotice>}
      {post.feature_image ? (
        <ImageWrapper>
          <Image src={post.feature_image} alt={post.title} />
        </ImageWrapper>
      ) : null}
      <MainSection>
        <Title>{post.title}</Title>
        <Date>{post.published_at_pretty}</Date>
        <TagWrapper>
          {post.tags.map((tag) => (
            <Tag key={tag.slug} tag={tag} />
          ))}
        </TagWrapper>
        <ArticleBody
          id='main-article'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </MainSection>
    </Article>
  );
};

export default Post;
