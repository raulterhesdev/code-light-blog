import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type LayoutTypes = {};

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
