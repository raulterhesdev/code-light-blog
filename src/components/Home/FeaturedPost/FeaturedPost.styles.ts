import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 8px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  box-shadow: 2px 4px 4px #00000029;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 2px 4px 4px #00000000;
  }
`;

export const Header = styled.div`
  padding: 0 16px;
`;

export const PublishedDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.darkGrey};
  opacity: 0.8;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  max-width: 700px;
  margin-bottom: 8px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ShortText = styled.p`
  max-width: 600px;
  margin-top: 4px;
  padding-left: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const TagWrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const CtaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;
  margin-bottom: 12px;
`;
