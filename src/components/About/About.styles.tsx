import styled from 'styled-components';

export const Wrapper = styled.article`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.white};
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 32px 16px;
  }
`;

export const Section = styled.section`
  max-width: 900px;
  padding: 0 24px;
  line-height: 1.5;
  letter-spacing: 0.8px;

  @media (max-width: 1200px) {
    padding: 0;
  }

  h2 {
    padding: 8px;
    margin-top: 16px;
    margin-bottom: 4px;
    font-size: 2rem;
    border-left: 4px solid ${({ theme }) => theme.primary};
  }

  p {
    letter-spacing: 0.7px;
    padding-bottom: 6px;
    font-size: 1rem;

    a {
      color: ${({ theme }) => theme.black};
      border-bottom: 3px solid ${({ theme }) => theme.primary};
      text-decoration: none;
    }
  }
`;

export const ImageWrapper = styled.figure`
  max-width: 400px;
  margin-top: 16px;
  @media (max-width: 1200px) {
    max-width: 100%;
    margin-top: 32px;
  }

  img {
    width: 100%;
  }
`;
