import React from 'react';
import { StyledCTA } from './CTA.styles';

const CTA: React.FC = ({ children }) => {
  return <StyledCTA>{children}</StyledCTA>;
};

export default CTA;
