import React from "react";
import './pagination.scss'
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`pagination-button ${isFirstPage ? "disabled" : ""}`}
        onClick={handlePrevClick}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <span className="pagination-current">Page {currentPage}</span>
      <button
        className={`pagination-button ${isLastPage ? "disabled" : ""}`}
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
