import React, { useState } from "react";
import data from "./BlogData";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Sidebar = () => {
  const [popularPost, setPopularPost] = useState(data);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Post</h3>
        <div>
          {popularPost.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-2 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="text-base hover:text-orange-500 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mt-16 px-4">Popular Post</h3>
        <div>
          {popularPost.slice(6, 11).map((blog) => (
            <div
              key={blog.id}
              className="my-2 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="text-base hover:text-orange-500 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
