import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.darkerGrey};
  padding: 12px;
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin-bottom: 8px;

  p {
    a {
      color: ${({ theme }) => theme.primary};
      text-decoration-color: ${({ theme }) => theme.primary};
    }
  }
`;

const AcceptButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  margin-top: 12px;
`;

const DeclineButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 18px;
  background-color: transparent;
  color: ${({ theme }) => theme.lighterGrey};
  cursor: pointer;
`;

const CookieConsent: React.FC = () => {
  const cookieName = 'ga-disable-G-EW4RZ6L0YM';

  const checkCookieName = (name: string): string => {
    {
      if (typeof window !== 'undefined') {
        var match = document.cookie.match(
          new RegExp('(^| )' + name + '=([^;]+)')
        );
        if (match) {
          return match[2];
        } else {
          console.log('--something went wrong---');
        }
      } else {
        return;
      }
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
        <Wrapper>
          <p>
            This website would like to use cookies to analytics purposes. Your
            personal information is completely private as described{' '}
            <a
              href='https://www.cookiepolicygenerator.com/live.php?token=Vw9A1YQeK9nSwXdNw2Ot1h4zei7kpCY4'
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
