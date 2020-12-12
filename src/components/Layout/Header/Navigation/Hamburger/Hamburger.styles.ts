import styled from 'styled-components';

export const StyledHamburger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 500;
  padding: 14px;
  span {
    display: block;
    width: 25px;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.white};
    margin-top: 2px;
    margin-bottom: 2px;
    transition: all 0.3s ease;
    transform-origin: left;
  }

  &:active {
    span {
      background-color: ${({ theme }) => theme.primary};
    }
  }

  span:first-child {
    transform: rotate(0) translateY(0);
  }

  span:nth-child(2) {
    transform: translateX(0);
  }

  span:last-child {
    transform: rotate(0) translateY(0);
  }

  transition: all 0.3s linear;

  ${(props) =>
    props.closed
      ? `
  span:first-child {
    transform: rotate(45deg) translateY(-4px);
  }

  span:nth-child(2) {
    background-color: transparent;
        transform: translateX(-16px);
  }

  span:last-child {
    transform: rotate(-45deg) translateY(4px);
  }
  `
      : null}

  @media (min-width: 768px) {
    display: none;
  }
`;
