import React from "react";

const Pagination = ({ blogs, onPageChange, currentPage, pageSize }) => {
  const totalPage = Math.ceil(blogs.length / pageSize);
  console.log(totalPage);
  console.log(currentPage);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className=" inline-flex  justify-center gap-2 items-center px-36 max-w-full lg:space-x-16 ">
      {currentPage != 1 && (
        <li className="cursor-pointer">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}>Previous
          </button>
        </li>
      )}
      <div className=" flex gap-4 cursor-pointer md:flex md:max-w-full ">{renderPaginationLinks()}</div>

      {totalPage != currentPage && (
        <li className="cursor-pointer">
          <button onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage} >
          Next
          </button>
          </li>
      )}
    </ul>
  );
};

export default Pagination;
