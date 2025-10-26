import React from "react";
import UserInfo from "./UserInfo.jsx";
import Chatlist from "./Chatlist.jsx";

const List = () => {
  return (
    <div className="border-r border-gray-400 w-1/5 flex-1">
      <UserInfo />
      <Chatlist />
    </div>
  );
};

export default List;
