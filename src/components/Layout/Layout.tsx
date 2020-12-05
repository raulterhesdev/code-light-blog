import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CookieConsent from '../common/CookieConsent/CookieConsent';
import { theme } from '../../utils/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Main, Container } from './Layout.styles';
import { Location } from '../../types';

type LayoutTypes = { location: Location };

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

const Layout: React.FC<LayoutTypes> = ({ children, location }) => {
  const paths = location.pathname.split('/');
  const currentPath = paths[1];

  return (
    <ThemeProvider theme={theme}>
      {/* Head Tag scripts and links */}
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
        />
      </Helmet>

      <GlobalStyle />

      <CookieConsent />

      <Header currentPath={currentPath} />

      <Main style={{ display: 'flex' }}>
        <Container>{children}</Container>
      </Main>

      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
