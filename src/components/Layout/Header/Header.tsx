import React from 'react';
import Navigation from './Navigation/Navigation';
import { StyledHeader, Logo } from './Header.styles';
import { Link } from 'gatsby';

type HeaderTypes = {
  currentPath: string;
};

const Header: React.FC<HeaderTypes> = ({ currentPath }) => {
  return (
    <StyledHeader>
      <Logo>
        <Link to='/'>
          &lt;<span> Raul Terhes </span>/&gt;
        </Link>
      </Logo>
      <Navigation currentPath={currentPath} />
    </StyledHeader>
  );
};

export default Header;
