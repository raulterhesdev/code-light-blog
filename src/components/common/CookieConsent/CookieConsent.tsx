import React, { useEffect, useState } from 'react';
import { AcceptButton, DeclineButton, Wrapper } from './CookieConsent.styles';

const CookieConsent: React.FC = () => {
  const [shouldDisplayCookieBanner, setShouldDisplayCookieBanner] = useState(
    false
  );
  const cookieName = 'ga-disable-G-EW4RZ6L0YM';
  const yearsToExpire = 5; // 5 years for the cookie to expire

  const checkCookieName = (name: string): string => {
    {
      if (typeof window !== 'undefined') {
        var match = document.cookie.match(
          new RegExp('(^| )' + name + '=([^;]+)')
        );
        if (match) {
          setShouldDisplayCookieBanner(false);
        } else {
          setShouldDisplayCookieBanner(true);
        }
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    checkCookieName(cookieName);
  }, []);

  const calculateExpirationDate = (years) => {
    var d = new Date();
    d.setTime(d.getTime() + years * 365 * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    return expires;
  };

  const acceptCookies = () => {
    const expires = calculateExpirationDate(yearsToExpire);
    document.cookie = `${cookieName}=false;${expires}`;
    setShouldDisplayCookieBanner(false);
  };

  const refuseCookie = () => {
    const expires = calculateExpirationDate(yearsToExpire);
    document.cookie = `${cookieName}=true;${expires}`;
    setShouldDisplayCookieBanner(false);
  };

  return (
    <>
      {shouldDisplayCookieBanner && (
        <Wrapper>
          <p>
            This website would like to use cookies for analytics purposes. Check
            our policy{' '}
            <a
              href='https://www.cookiepolicygenerator.com/live.php?token=ft1uOV5NCRSIMsUoHdeFvy7bsTelnmID'
              rel='noopener'
              target='_blank'
            >
              here
            </a>
            .
          </p>
          <div>
            <AcceptButton onClick={acceptCookies}>Accept</AcceptButton>
            <DeclineButton onClick={refuseCookie}>Decline</DeclineButton>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default CookieConsent;
