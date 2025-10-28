import React from "react";
import { FaRegUser } from "react-icons/fa";

const Detail = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col items-center justify-center p-5">
        <div className="bg-green-700 rounded-full p-7 m-1 mr-2 h-fit w-fit">
          <FaRegUser className="text-white text-8xl" />
        </div>
        <p className="font-bold text-3xl p-1">Tony</p>
        <p className=" text-gray-700 text-xl ">About me....</p>
      </div>
      <div className="flex-1">Shared Images</div>
      <button className="w-1/3 mx-auto m-3 bg-red-600 rounded-xl p-3 text-white font-bold">
        Block
      </button>
    </div>
  );
};

export default Detail;
