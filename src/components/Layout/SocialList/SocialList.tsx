import React from 'react';
import socialLinks from '../../../utils/socialLinks';
import { StyledSocialList, SocialLink } from './SocialList.styles';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

type SocialListProps = {
  smallWidthIcon?: boolean;
};

const SocialList: React.FC<SocialListProps> = ({ smallWidthIcon }) => {
  return (
    <StyledSocialList>
      {socialLinks.map((link) => (
        <SocialLink key={link.name} smallWidthIcon={smallWidthIcon}>
          <OutboundLink
            href={link.to}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={link.icon} alt={link.name} />
          </OutboundLink>
        </SocialLink>
      ))}
    </StyledSocialList>
  );
};

export default SocialList;
