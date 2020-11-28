import React from 'react';
import { Link } from 'gatsby';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CookieConsent from '../common/CookieConsent/CookieConsent';

import { AllPagesEnum } from '../../types/AllPagesEnum';

type LayoutTypes = { page?: AllPagesEnum };

const Layout: React.FC<LayoutTypes> = ({ children, page }) => {
  return (
    <>
      <CookieConsent />
      <Header />
      <main style={{ display: 'flex' }}>
        <div>{children}</div>
        <aside>
          {page !== AllPagesEnum.about && (
            <div>
              <h3>About me</h3>
              <p>Short about me description</p>
              <Link to='/about'>Find out more!</Link>
            </div>
          )}
          <div>{/* adds go here */}</div>
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
