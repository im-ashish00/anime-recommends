import React from 'react';

export const Pagination = ({ pageNumber, goToNextPage, goToPreviousPage }) => {
  return (
    <div className="container text-center mb-3">
      {pageNumber === 0 ? (
        <div></div>
      ) : (
        <button
          onClick={goToPreviousPage}
          className="btn btn-outline-success m-3 p-3"
        >
          Previous
        </button>
      )}

      <button
        onClick={goToNextPage}
        className="btn btn-outline-success m-3 p-3"
      >
        Next
      </button>
    </div>
  );
};
