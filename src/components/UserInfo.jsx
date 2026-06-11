import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useUserStore } from "../lib/userStore";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="flex justify-between items-center m-1 p-2">
      <div className="flex items-center">
        <div className="bg-blue-700 rounded-full p-1.5 m-1 ">
          <FaRegUser className="text-white text-lg" />
        </div>

        <p className="m-1 mx-1 text-lg font-bold">{currentUser.username}</p>
      </div>
      <div className="flex items-center">
        <p className="m-1 mx-1.5 text-2xl">...</p>
        <CiEdit className="m-1 mx-1 text-2xl" />
      </div>
    </div>
  );
};

export default UserInfo;
