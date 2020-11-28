import { Link } from 'gatsby';
import React from 'react';

import routes from '../../../../utils/navigationPaths';
import socialLinks from '../../../../utils/socialLinks';

const Navigation: React.FC = () => {
  return (
    <nav style={{ display: 'flex' }}>
      <ul>
        {routes.map((route) => (
          <li key={route.title}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.name}>{link.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
