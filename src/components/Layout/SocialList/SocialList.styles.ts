import styled from 'styled-components';

export const StyledSocialList = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 16px;
`;

export const SocialLink = styled.li`
  padding: 12px 16px;
  margin: 0 6px;

  @media (max-width: 600px) {
    padding: 12px 6px;
  }

  a {
    img {
      max-width: 40px;
      width: ${({ smallWidthIcon }) => (smallWidthIcon ? '10vw' : '40px')};
      filter: invert(47%) sepia(98%) saturate(383%) hue-rotate(140deg)
        brightness(99%) contrast(88%);
    }
  }

  &:hover {
    a {
      img {
        filter: invert(98%) sepia(23%) saturate(387%) hue-rotate(140deg)
          brightness(110%) contrast(100%);
      }
    }
  }
`;
