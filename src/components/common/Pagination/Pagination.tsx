import React from 'react';
import { Link } from 'gatsby';
import { PageContext } from '../../../types';

type PaginationType = {
  pageContext: PageContext;
};

const Pagination: React.FC<PaginationType> = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext;

  return (
    <nav role='navigation'>
      <div>
        {previousPagePath && (
          <Link to={previousPagePath} rel='prev'>
            Previous
          </Link>
        )}
      </div>
      {numberOfPages > 1 && (
        <div>
          Page {humanPageNumber} of {numberOfPages}
        </div>
      )}
      <div>
        {nextPagePath && (
          <Link to={nextPagePath} rel='next'>
            Next
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
