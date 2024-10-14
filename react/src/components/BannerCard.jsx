import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BannerCard = ({ blogs, selectedCategory, currentPage, pageSize }) => {
  const filteredBlog = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
 
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  ">
      {filteredBlog.map((cards) => {
        const {
          id,
          title,
          image,
          category,
          author,
          authorPic,
          published_date,
          reading_time,
          content,
          tags,
        } = cards;
        return (
          <div>
            <Link to={`/blogs/${id}`} key={id} className="p-5 shadow-lg rounded cursor-pointer ">
              <div>
                <img src={image} alt={author} className="w-full " />
              </div>
              <h3 className="mt-4 mb-2 font-bold hover:text-orange-500 cursor-pointer">
                {title}
              </h3>
              <p className="mb-2 text-gray-500 text-sm">
                <FaUser className="inline-flex items-center mr-2" /> {author}
              </p>
              <p className="text-sm text-gray-500">
                Published: {published_date}
              </p>
              <p className="text-sm text-gray-500">{category}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BannerCard;
