import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 0 0 8px 8px;
  box-shadow: 2px 4px 4px #00000029;
`;

export const Header = styled.div`
  padding: 0 12px;
`;

export const PublishedDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.darkGrey};
  opacity: 0.8;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TagWrapper = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-wrap: wrap;
`;

export const CtaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;
`;
