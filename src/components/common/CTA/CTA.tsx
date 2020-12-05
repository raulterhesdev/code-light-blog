import React from 'react';
import styled from 'styled-components';

const StyledCTA = styled.span`
  padding: 12px 0;
  a {
    padding: 12px 18px;
    text-decoration: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primaryLight};
    box-shadow: 0 4px 8px #00000029;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
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
