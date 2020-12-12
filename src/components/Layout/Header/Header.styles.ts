import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 24px;
  background-color: ${({ theme }) => theme.darkerGrey};
`;

export const Logo = styled.span`
  padding: 12px 16px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryLight};

    span {
      color: ${({ theme }) => theme.accent};
    }
  }

  @media (max-width: 768px) {
    padding: 12px 0;
  }
`;
