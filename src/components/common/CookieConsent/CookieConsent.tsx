import React from 'react';

//const gaCookie = 'gatsby-plugin-google-analytics-gdpr_cookies-enabled';

// const checkCookieName = (name: string): string => {
//   var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//   if (match) {
//     return match[2];
//   } else {
//     console.log('--something went wrong---');
//   }
// };

const CookieConsent: React.FC = () => {
  return (
    <div>
      CookieConsent
      <a href='javascript:gaOptout();'>Deactive Google Tracking</a>
    </div>
  );
};

export default CookieConsent;
