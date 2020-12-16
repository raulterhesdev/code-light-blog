import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  transition: all 0.5s ease-in;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
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
    color: ${({ theme }) => theme.white};
    border-bottom: 2px solid
      ${({ isCurrentPath, theme }) =>
        isCurrentPath ? theme.primaryLight : 'transparent'};
    transition: all 0.2s ease-in;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const SocialWrapper = styled.div`
  position: absolute;
  bottom: 64px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
