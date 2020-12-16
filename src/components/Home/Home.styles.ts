import styled from 'styled-components';

export const SectionHeader = styled.h2`
  padding: 35px 25px;
  text-align: center;
  background-color: ${({ theme }) => theme.darkGrey};
  width: 100%;
  color: ${({ theme }) => theme.white};

  p {
    padding-top: 12px;
    font-size: 1rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 550px) {
    width: 96%;
  }

  @media (min-width: 1280px) {
    margin: 12px auto;
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-gap: 24px;

    align-items: initial;
    justify-content: center;
  }
`;

export const Cta = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
  a {
    text-decoration: none;
    background: ${({ theme }) => theme.primaryLight};
    text-align: center;
    padding: 16px;
    color: white;

    width: 100%;
    max-width: 600px;

    &:hover {
      background: ${({ theme }) => theme.primary};
    }
  }
`;
