import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CookieConsent from '../common/CookieConsent/CookieConsent';
import { theme } from '../../utils/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AllPagesEnum } from '../../types/AllPagesEnum';

type LayoutTypes = { page?: AllPagesEnum };

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
`;

const Layout: React.FC<LayoutTypes> = ({ children, page }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <script
          data-ad-client='ca-pub-7374604984496320'
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        ></script>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Helmet>
      <GlobalStyle />
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
    </ThemeProvider>
  );
};

export default Layout;
