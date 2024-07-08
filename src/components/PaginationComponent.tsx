// PaginationComponent.tsx
"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages === 1) {
    return null; 
  }

  const handleClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`inline-block px-3 py-1 cursor-pointer ${
            currentPage === i
              ? "bg-main text-white"
              : "hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="text-center  mt-4">
      <ul className="inline-flex space-x-2">
        <li
          className={`inline-block px-3 py-1 cursor-pointer ${
            currentPage === 1
              ? "pointer-events-none text-gray-400"
              : "hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleClick(currentPage - 1)}
        >
          {"<"}
        </li>
        {renderPageNumbers()}
        <li
          className={`inline-block px-3 py-1 cursor-pointer ${
            currentPage === totalPages
              ? "pointer-events-none text-gray-400"
              : "hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleClick(currentPage + 1)}
        >
          {">"}
        </li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
