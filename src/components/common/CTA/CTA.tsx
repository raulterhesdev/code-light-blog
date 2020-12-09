import React from 'react';
import styled from 'styled-components';

const StyledCTA = styled.span`
  padding: 12px 0;
  a {
    padding: 12px 18px;
    text-decoration: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.black};
    background-color: transparent;
    transition: all 0.3s ease-in;
    position: relative;

    span {
      position: absolute;
      top: 10px;
      left: -4px;
      transition: all 0.3s ease-in;
    }

    &:hover {
      padding: 12px 10px 12px 26px;

      span {
        left: 4px;
      }
    }

    &:active {
      transform: translateY(1px);
      box-shadow: none;
    }
  }
`;

const CTA: React.FC = ({ children }) => {
  return <StyledCTA>{children}</StyledCTA>;
};

export default CTA;
