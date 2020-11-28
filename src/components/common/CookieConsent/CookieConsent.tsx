import React from 'react';

// const checkCookieName = (name: string): string => {
//   var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//   if (match) {
//     return match[2];
//   } else {
//     console.log('--something went wrong---');
//   }
// };

const CookieConsent: React.FC = () => {
  // check if this cookie exists ga-disable-G-EW4RZ6L0YM
  // if not display the banner and ask the user to agree
  // find some link to cookie policy to display
  const cookieName = 'ga-disable-G-EW4RZ6L0YM';

  const checkCookieName = (name: string): string => {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
      return match[2];
    } else {
      console.log('--something went wrong---');
    }
  };

  const shouldDisplayCookieBanner = checkCookieName(cookieName);

  const acceptCookies = () => {
    document.cookie = `${cookieName}=true`;
  };

  const refuseCookie = () => {
    document.cookie = `${cookieName}=false`;
  };

  return (
    <>
      {!shouldDisplayCookieBanner && (
        <div>
          <p>
            We use cookies to optimize content for this website. Check our
            <a
              href='https://www.privacypolicygenerator.info/live.php?token=fmI710Fh4qMnzbhFRcHsinGLOhNXT60G'
              rel='noopener'
              target='_blank'
            >
              Privacy Policy
            </a>
            !
          </p>
          <button onClick={acceptCookies}>Accept</button>
          <button onClick={refuseCookie}>Decline</button>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
