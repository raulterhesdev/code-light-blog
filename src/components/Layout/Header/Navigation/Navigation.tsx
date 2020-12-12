import { Link } from 'gatsby';
import React, { useState } from 'react';
import Hamburger from './Hamburger/Hamburger';
import routes from '../../../../utils/navigationPaths';
import SocialList from '../../SocialList/SocialList';

import { Nav, List, MenuItem, SocialWrapper } from './Navigation.styles';

type NavigationTypes = {
  currentPath: string;
};

const Navigation: React.FC<NavigationTypes> = ({ currentPath }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Nav>
      <List closed={toggle} onClick={() => setToggle((prev) => !prev)}>
        {routes.map((route) => (
          <MenuItem
            key={route.title}
            isCurrentPath={`/${currentPath}` === route.path}
          >
            <Link to={route.path}>{route.title}</Link>
          </MenuItem>
        ))}
        <SocialWrapper>
          <SocialList smallWidthIcon />
        </SocialWrapper>
      </List>
      <Hamburger onClick={() => setToggle((prev) => !prev)} closed={toggle} />
    </Nav>
  );
};

export default Navigation;
