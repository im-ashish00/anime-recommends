import React from 'react';

export const Pagination = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div className="container text-center mb-3">
      <button
        onClick={goToPreviousPage}
        className="btn btn-outline-success m-3 p-3"
      >
        Previous
      </button>
      <button
        onClick={goToNextPage}
        className="btn btn-outline-success m-3 p-3"
      >
        Next
      </button>
    </div>
  );
};
