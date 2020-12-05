import React from 'react';
import NewsletterSubscription from './NewsletterSubscription/NewsletterSubcription';
import socialLinks from '../../../utils/socialLinks';
import { StyledFooter, SocialLink, SocialList } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <NewsletterSubscription />
      <SocialList>
        {socialLinks.map((link) => (
          <SocialLink key={link.name}>
            <a href={link.to} target='_blank' rel='noopener noreferrer'>
              {link.name}
            </a>
          </SocialLink>
        ))}
      </SocialList>
    </StyledFooter>
  );
};

export default Footer;
