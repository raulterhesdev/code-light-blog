import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkerGrey};
`;

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialLink = styled.li`
  padding: 12px 16px;
  margin: 0 6px;
  a {
    color: black;
    text-decoration: none;
    color: ${({ theme }) => theme.white};

    &:hover {
      color: ${({ theme }) => theme.primaryLight};
    }
  }
`;
