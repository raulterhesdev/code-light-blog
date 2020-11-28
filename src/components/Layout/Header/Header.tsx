import React from 'react';
import Navigation from './Navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex' }}>
      <span>Logo</span>
      <Navigation />
    </header>
  );
};

export default Header;
