import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 24px 0;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 0 0 8px 8px;
  box-shadow: 2px 4px 4px #00000029;
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
  max-width: 800px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ShortText = styled.p`
  max-width: 600px;
  margin-top: 4px;
  padding-left: 16px;
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
