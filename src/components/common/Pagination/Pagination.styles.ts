import styled from 'styled-components';

export const StyledPagination = styled.nav`
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin-bottom: 16px;
`;

export const PaginationButton = styled.div`
  padding: 12px 0;
  a {
    text-decoration: none;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.darkGrey};
    color: ${({ theme }) => theme.white};
    &:hover {
      background-color: ${({ theme }) => theme.darkerGrey};
    }
  }
`;

export const PageNumberDisplay = styled.div`
  font-size: 1rem;
  margin: 0 16px;
  padding: 11px;
  border: 1px solid ${({ theme }) => theme.darkGrey};
  color: ${({ theme }) => theme.darkGrey};
`;
