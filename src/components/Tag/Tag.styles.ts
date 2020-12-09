import styled from 'styled-components';

export const StyledTag = styled.span`
  padding: 8px 0px;
  a {
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.darkGrey};
    color: ${({ theme }) => theme.white};
    padding: 8px 12px;
    margin: 0 4px;
    border-radius: 12px;

    text-decoration: none;
    padding: 4px 8px;

    &:hover {
      background-color: ${({ theme }) => theme.darkerGrey};
    }
  }
`;
