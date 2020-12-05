import styled from 'styled-components';

export const Article = styled.article`
  background-color: ${({ theme }) => theme.white};
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1000px;
`;

export const MainSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 16px 8px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Date = styled.p`
  color: #333;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ArticleBody = styled.section`
  line-height: 1.4;
  h2 {
    font-size: 1.7rem;
    padding: 4px 8px;
    /* border-left: 4px solid ${({ theme }) => theme.primary}; */
    margin: 24px 0 8px 0;
    position: relative;
  }

  h3 {
    font-size: 1.4rem;
    padding: 4px 8px;
    margin: 16px 0 8px 24px;
    position: relative;
    /* border-left: 2px solid ${({ theme }) => theme.primary}; */
  }

  h2::before,
  h3::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 4px;
    border-radius: 2px;
  }
  h2::before {
    width: 45px;
    background-color: ${({ theme }) => theme.darkGrey};
  }

  h3::before {
    width: 24px;
    background-color: ${({ theme }) => theme.darkGrey};
  }

  strong {
  }

  em {
  }

  p {
    padding: 6px 3px;
    font-size: 1rem;
  }

  blockquote {
    font-size: 1.1rem;
    padding: 12px 20px;
    border-left: 4px solid ${({ theme }) => theme.darkGrey};
    border-right: 4px solid ${({ theme }) => theme.darkGrey};
  }

  a {
    color: ${({ theme }) => theme.black};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  hr {
  }

  figure {
    max-width: 100%;
    display: flex;
    margin: 8px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: 100%;
    }
    figcaption {
      margin-top: 8px;
    }
  }

  figure.kg-image-card {
    img {
      max-width: 600px;
    }
  }

  figure.kg-width-wide {
    img {
      max-width: 900px;
    }
  }

  figure.kg-width-full {
    img {
      max-width: 100%;
    }
  }

  figure blockquote.twitter-tweet {
  }

  figure.kg-gallery-card {
  }

  figure.kg-embed-card {
  }

  pre {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.darkerGrey};
    color: ${({ theme }) => theme.white};
    padding: 40px 8px 16px 8px;
    position: relative;
    code {
    }

    .copy-button {
      position: absolute;
      top: 0;
      right: 0;
      padding: 8px;
      cursor: pointer;
    }

    .language-sign {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 8px 12px;

      color: ${({ theme }) => theme.primary};
    }
  }

  ul,
  ol {
    padding: 8px 0;
    margin-left: 32px;
  }
`;
