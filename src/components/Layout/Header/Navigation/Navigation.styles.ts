import styled from 'styled-components';

export const Nav = styled.nav``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  transition: all 0.5s ease-in;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    transform: translateX(${({ closed }) => (closed ? '0' : '-100vw')});
    height: 100vh;
    background-color: white;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.darkerGrey};
    box-shadow: 8px 0 8px #00000029;
    z-index: 200;
  }
`;

export const MenuItem = styled.li`
  padding: 14px 0;

  a {
    padding: 14px 24px;
    text-decoration: none;
    color: ${({ isCurrentPath, theme }) =>
      isCurrentPath ? theme.primaryLight : theme.white};
    border-bottom: 2px solid
      ${({ isCurrentPath, theme }) =>
        isCurrentPath ? theme.primaryLight : 'transparent'};

    &:hover {
      color: ${({ theme }) => theme.primary};
      border-bottom: 2px solid
        ${({ isCurrentPath, theme }) =>
          isCurrentPath ? theme.primary : 'transparent'};
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 4px;
  }
`;
