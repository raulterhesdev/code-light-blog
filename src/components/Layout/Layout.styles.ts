import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.lighterGrey};
  min-height: 90vh;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  padding-bottom: 16px;
`;

export const Container = styled.div`
  order: 1px solid blue;
  width: 100%;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;
