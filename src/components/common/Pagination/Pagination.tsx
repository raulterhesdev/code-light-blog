import React from 'react';
import { Link } from 'gatsby';
import { PageContext } from '../../../types';
import {
  StyledPagination,
  PageNumberDisplay,
  PaginationButton,
} from './Pagination.styles';

type PaginationType = {
  pageContext: PageContext;
};

const Pagination: React.FC<PaginationType> = ({ pageContext }) => {
  console.log(pageContext);
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext;

  return (
    <StyledPagination role='navigation'>
      <PaginationButton>
        {previousPagePath && (
          <Link to={previousPagePath} rel='prev'>
            Previous
          </Link>
        )}
      </PaginationButton>
      {numberOfPages > 1 && (
        <PageNumberDisplay>
          {humanPageNumber}/{numberOfPages}
        </PageNumberDisplay>
      )}
      <PaginationButton>
        {nextPagePath && (
          <Link to={nextPagePath} rel='next'>
            Next
          </Link>
        )}
      </PaginationButton>
    </StyledPagination>
  );
};

export default Pagination;
