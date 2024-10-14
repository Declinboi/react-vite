import React from "react";
import { useLoaderData } from "react-router-dom";
import data from "../components/BlogData";
import { FaClock, FaUser } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";
const Singlepost = () => {
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
  } = data[0];

  console.log(data);

  return (
    <div>
      <div className="px-4 py-40 bg-black text-center text-white">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Post
        </h1>
      </div>
      {/* blogs details */}
      <div className="max-w-7xl mx-auto my-12 px-5 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto ">
          <div>
            <img src={image} alt={author} className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-8 text-blue-300 cursor-pointer ">
            {title}
          </h2>
          <p className="  mb-4 text-gray-500">
            {" "}
            <FaUser className=" mr-1 inline-flex items-center " /> {author} |{" "}
            {published_date}{" "}
          </p>
          <p className="mb-4 text-gray-500 ">
            {" "}
            <FaClock className="mr-1 inline-flex items-center" /> {reading_time}{" "}
          </p>
          <p className="text-sm text-gray-300 mb-6 ">
            {content}
            <div className="text-sm text-gray-300">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, id accusantium. Enim aliquam esse magnam recusandae
                nesciunt obcaecati est soluta in sint facere inventore, incidunt
                corrupti accusantium pariatur, fugit mollitia.
              </p>{" "}
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, id accusantium. Enim aliquam esse magnam recusandae
                nesciunt obcaecati est soluta in sint facere inventore, incidunt
                corrupti accusantium pariatur, fugit mollitia.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, id accusantium. Enim aliquam esse magnam recusandae
                nesciunt obcaecati est soluta in sint facere inventore, incidunt
                corrupti accusantium pariatur, fugit mollitia.
              </p>
            </div>
          </p>
        </div>
        <div className="lg:w-1/2 mx-8"> <Sidebar/> </div>
      </div>
    </div>
  );
};

export default Singlepost;
