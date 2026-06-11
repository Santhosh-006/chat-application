import { useUserStore } from "../lib/userStore";
import { db } from "../lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useState } from "react";
import { FaPlus, FaRegUser } from "react-icons/fa";

const AddUser = ({ onClose }) => {
  const [user, setUser] = useState(null);

  const { currentUser } = useUserStore();
  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("email", "==", email));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });

      console.log(newChatRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-max h-max absolute top-0 bottom-0 left-0 right-0 m-auto p-2 rounded bg-white shadow-2xl">
      <div className="flex items-center bg-white border border-gray-300 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200 px-3 py-1.5 mx-4">
        <form onSubmit={handleSearch} className="flex justify-end">
          <input
            type="email"
            placeholder="Search by email"
            name="email"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
          />
          <button
            className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            type="submit"
          >
            <FaPlus className="text-sm" />
          </button>
        </form>
      </div>
      {user && (
        <div className="flex gap-2 p-4 items-center">
          <div className="bg-red-700 rounded-full p-3 m-1">
            <FaRegUser className="text-white text-3xl" />
          </div>

          <div>
            <p className="m-1 mx-1 text-xl font-bold">{user.username}</p>
            <p className="text-lg text-gray-700 m-1 mx-1">Hello...</p>
          </div>
          <button
            className="p-1 w-28 rounded bg-blue-600 text-white cursor-pointer"
            onClick={(e) => {
              handleAdd();
              onClose();
            }}
          >
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
