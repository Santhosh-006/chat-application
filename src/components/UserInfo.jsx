import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const UserInfo = () => {
  return (
    <div className="flex justify-between items-center m-1 p-2">
      <div className="flex items-center">
        <div className="bg-blue-700 rounded-full p-1.5 m-1">
          <FaRegUser className="text-white text-lg" />
        </div>

        <p className="m-1 mx-1 text-sm">JohnDoe</p>
      </div>
      <div className="flex items-center">
        <p className="m-1 mx-1.5">...</p>
        <CiEdit className="m-1 mx-1" />
      </div>
    </div>
  );
};

export default UserInfo;
