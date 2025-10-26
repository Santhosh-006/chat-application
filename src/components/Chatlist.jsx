import React from "react";
import { FaPlus, FaRegUser } from "react-icons/fa";

const Chatlist = () => {
  return (
    <div className="my-2">
      <div className="flex items-center bg-white border border-gray-300 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200 px-3 py-1.5 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
        />
        <button className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
          <FaPlus className="text-sm" />
        </button>
      </div>
      {/* Chat List  */}

      <div className="my-4">
        <div className="p-1 my-1">
          <div className="flex items-center">
            <div className="bg-blue-700 rounded-full p-3 m-1">
              <FaRegUser className="text-white text-3xl" />
            </div>

            <div>
              <p className="m-1 mx-1 text-xl font-bold">JohnDoe</p>
              <p className="text-lg text-gray-700 m-1 mx-1">Hello...</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-0.5" />
        <div className="p-1 my-1">
          <div className="flex items-center">
            <div className="bg-amber-700 rounded-full p-3 m-1">
              <FaRegUser className="text-white text-3xl" />
            </div>

            <div>
              <p className="m-1 mx-1 text-xl font-bold">JohnDoe</p>
              <p className="text-lg text-gray-700 m-1 mx-1">Hello...</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-0.5" />
        <div className="p-2 my-2">
          <div className="flex items-center">
            <div className="bg-purple-700 rounded-full p-3 m-1">
              <FaRegUser className="text-white text-3xl" />
            </div>

            <div>
              <p className="m-1 mx-1 text-xl font-bold">JohnDoe</p>
              <p className="text-lg text-gray-700 m-1 mx-1">Hello...</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-0.5" />
        <div className="p-2 my-2">
          <div className="flex items-center">
            <div className="bg-green-700 rounded-full p-3 m-1">
              <FaRegUser className="text-white text-3xl" />
            </div>

            <div>
              <p className="m-1 mx-1 text-xl font-bold">JohnDoe</p>
              <p className="text-lg text-gray-700 m-1 mx-1">Hello...</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-0.5" />
        <div className="p-2 my-2">
          <div className="flex items-center">
            <div className="bg-red-700 rounded-full p-3 m-1">
              <FaRegUser className="text-white text-3xl" />
            </div>

            <div>
              <p className="m-1 mx-1 text-xl font-bold">JohnDoe</p>
              <p className="text-lg text-gray-700 m-1 mx-1">Hello...</p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-0.5" />
      </div>
    </div>
  );
};

export default Chatlist;
