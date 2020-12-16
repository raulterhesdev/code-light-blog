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
  padding: 16px 12px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Date = styled.p`
  color: #333;
  padding-left: 2px;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ArticleBody = styled.section`
  margin-top: 12px;
  line-height: 1.5;
  /* letter-spacing: 0.px; */
  h2 {
    font-size: 1.8rem;
    padding: 2px 8px;
    /* border-left: 4px solid ${({ theme }) => theme.primary}; */
    margin: 24px 0 2px 0;
    position: relative;
  }

  h3 {
    font-size: 1.4rem;
    padding: 4px 8px;
    margin: 8px 0 0 0;
    position: relative;
    /* border-left: 2px solid ${({ theme }) => theme.primary}; */
  }

  strong {
  }

  em {
  }

  p {
    padding: 2px 8px;
    font-size: 1rem;
  }

  blockquote {
    font-size: 1.1rem;
    margin: 4px 0;
    padding: 12px 20px;
    border-radius: 6px;
    border-left: 5px solid ${({ theme }) => theme.primaryLight};
    border-right: 5px solid ${({ theme }) => theme.primaryLight};
  }

  a {
    color: ${({ theme }) => theme.black};
    border-bottom: 3px solid ${({ theme }) => theme.primary};
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
    iframe {
      max-width: 100vw;
    }
  }

  pre {
    margin: 10px 0 16px 0;
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: black;
    color: ${({ theme }) => theme.white};
    padding: 40px 8px 16px 8px;
    position: relative;
    overflow-x: auto;

    code {
      font-size: 0.8rem;
    }

    .copy-button {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 12px;
      cursor: pointer;
      opacity: 0;
      transition: all 0.2s linear;
      background-color: ${({ theme }) => theme.darkGrey};
      border-radius: 8px;
      margin: 8px;

      @media (max-width: 768px) {
        opacity: 1;
      }
    }

    .language-sign {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 8px 12px;

      color: ${({ theme }) => theme.primaryLight};
    }

    &:hover {
      .copy-button {
        opacity: 1;
      }
    }
  }

  ul,
  ol {
    padding: 8px 0;
    margin-left: 8px;
  }
`;

export const CopyNotice = styled.div`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.darkGrey};
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
`;
