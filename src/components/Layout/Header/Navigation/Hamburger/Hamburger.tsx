import React from 'react';
import { StyledHamburger } from './Hamburger.styles';

type HamburgerProps = {
  onClick: Function;
  closed: boolean;
};

const Hamburger: React.FC<HamburgerProps> = ({ onClick, closed }) => {
  return (
    <StyledHamburger onClick={onClick} closed={closed}>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
};

export default Hamburger;
