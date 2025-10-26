import React from "react";
import { FaRegUser, FaPhoneAlt, FaCamera, FaInfoCircle } from "react-icons/fa";

const Chat = () => {
  return (
    <div className="flex-2 border-r border-gray-400 ">
      {/* tOP sECTION */}
      <div className="flex justify-between items-center border-b border-gray-400 p-2">
        <div className="flex items-center">
          <div className="bg-blue-700 rounded-full p-3 m-1">
            <FaRegUser className="text-white text-3xl" />
          </div>

          <div>
            <p className="m-1 mx-1 text-xl font-bold">JohnDoe</p>
            <p className="text-lg text-gray-700 m-1 mx-1">About...</p>
          </div>
        </div>
        <div className="flex justify-between">
          <FaPhoneAlt />
          <FaCamera />
          <FaInfoCircle />
        </div>
      </div>
    </div>
  );
};

export default Chat;
