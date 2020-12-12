import React from 'react';
import NewsletterSubscription from './NewsletterSubscription/NewsletterSubcription';
import socialLinks from '../../../utils/socialLinks';
import { StyledFooter } from './Footer.styles';
import SocialList from '../SocialList/SocialList';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <NewsletterSubscription />
      <SocialList />
    </StyledFooter>
  );
};

export default Footer;
