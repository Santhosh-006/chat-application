import React, { useEffect, useState } from "react";
import { FaPlus, FaRegUser } from "react-icons/fa";
import AddUser from "./AddUser";
import { useUserStore } from "../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promisses = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();
          // console.log(user);

          return { ...item, user };
        });

        const chatData = await Promise.all(promisses);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      },
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  // useEffect(() => {
  //   console.log(chats);
  // }, [chats]);

  return (
    <div className="my-2">
      <div className="flex items-center bg-white border border-gray-300 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200 px-3 py-1.5 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
        />
        <button
          className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
          onClick={() => setAddMode(true)}
        >
          <FaPlus className="text-sm" />
        </button>
      </div>
      {/* Chat List  */}

      {addMode ? (
        <AddUser onClose={() => setAddMode(false)} />
      ) : (
        <div className="my-4">
          <div className="my-4">
            {chats.map((chat) => (
              <div key={chat.chatId}>
                <div className="p-1 my-1">
                  <div className="flex items-center">
                    <div className="bg-blue-700 rounded-full p-3 m-1">
                      <FaRegUser className="text-white text-3xl" />
                    </div>

                    <div>
                      <p className="m-1 mx-1 text-xl font-bold">
                        {chat.user.username}
                      </p>
                      <p className="text-lg text-gray-700 m-1 mx-1">
                        {chat.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-t-2 border-gray-200 my-0.5" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatlist;
