import { Link } from 'gatsby';
import React from 'react';

import routes from '../../../../utils/navigationPaths';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.title}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
