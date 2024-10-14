import React, { act, useEffect, useState } from "react";
import BannerCard from "./BannerCard";
import data from "./BlogData";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";

const Blogpage = () => {
  const [blogs, setBlogs] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // useEffect(() => {
  //   if (selectedCategory) {
  //     data += `&category=${selectedCategory}`;
  //   }
  // }),
  //   [currentPage, pageSize, selectedCategory];

  const handlePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      <div>
        <CategorySelection
          onSelectCategory={handleCategory}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-12 px-6">
        <BannerCard
          blogs={blogs}
          selectedCategory={selectedCategory}
          currentPage={currentPage}
          pageSize={pageSize}
        />
        <div>
          <Sidebar/>
        </div>
      </div>
      <div>
        <Pagination
          blogs={blogs}
          onPageChange={handlePageNumber}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Blogpage;
