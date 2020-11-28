import React from 'react';
import Navigation from './Navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex' }}>
      <span>&lt;code-light /&gt;</span>
      <Navigation />
    </header>
  );
};

export default Header;
