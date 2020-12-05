import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 32px;
  /* height: 100%; */
  background-color: ${({ theme }) => theme.white};
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 32px 16px;
  }
`;

export const Section = styled.section`
  max-width: 900px;
  padding: 0 24px;

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
      color: ${({ theme }) => theme.primary};
      text-decoration-color: ${({ theme }) => theme.primary};
    }
    a:visited {
      color: ${({ theme }) => theme.primaryDark};
      text-decoration-color: ${({ theme }) => theme.primaryDark};
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
