import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="">
        <div className="bg-indigo-500 text-center p-5 h-96 lg:w-[500px] rounded shadow-sm">
          {/* modal content */}
          <h2 className="text-xl font-semibold mb-4 mt-6 uppercase">
            Please Login Here!
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-white bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md "
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-white bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md "
              />
            </div>
            <div className="mt-6">
              <button className="hover:shadow-md rounded-md bg-indigo-400 hover:bg-orange-600 px-8 py-3 text-base font-semibold outline-none">
                Login
              </button>
            </div>
          </form>
          <button onClick={onClose} className=" text-gray-700 font-semibold px-4 py-2 rounded-md inline-flex items-center mt-6 bg-gray-300 hover:bg-gray-400">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
