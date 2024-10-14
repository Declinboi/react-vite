import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
    { path: "/blogs", link: "Blogs" },
  ];

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Design<span className="text-orange-500">Dk</span>
        </a>
        {/* navitems for large device */}
        <ul className="md:flex gap-12 text-lg hidden ">
          {navItems.map(({ path, link }) => (
            <li
              className="text-white hover:text-orange-500 transition-all duration-150 ease-in-out underline "
              key={path}
            >
              <NavLink to={path}> {link} </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icon */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-400">
            <FaFacebookF />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaTwitter />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaInstagram />
          </a>
          <button onClick={OpenModal} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Login
          </button>
        </div>

        {/* modal */}
        <div>
          <Modal isOpen={isModalOpen} onClose={CloseModal}/>
        </div>

        {/* mobile menu screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li
              className="text-black hover:text-orange-500 transition-all ease-in"
              key={path}
            >
              <NavLink to={path}> {link} </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
