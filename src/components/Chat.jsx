import React, { useEffect, useRef, useState } from "react";
import {
  FaRegUser,
  FaPhoneAlt,
  FaCamera,
  FaInfoCircle,
  FaImage,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex-2  flex flex-col border-r border-gray-200">
      {/* tOP sECTION */}
      <div className="flex justify-between items-center border-b border-gray-200 p-2">
        <div className="flex items-center">
          <div className="bg-blue-700 rounded-full p-3 m-1 mr-2">
            <FaRegUser className="text-white text-3xl " />
          </div>

          <div>
            <p className="mt-1 mx-1 text-xl font-bold">JohnDoe</p>
            <p className="text-lg text-gray-700 mb-1 mx-1">About...</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <FaPhoneAlt className="m-1 mx-3 text-2xl text-gray-500" />
          <FaCamera className="m-1 text-2xl  mx-3 text-gray-500" />
          <FaInfoCircle className="m-1 text-2xl  mx-3 text-gray-500" />
        </div>
      </div>
      {/* Middle Section */}
      <div className="flex-1 flex flex-col gap-5 p-5 overflow-y-scroll">
        <div className="flex max-w-3/5">
          <div className="bg-red-700 rounded-full p-3 m-1 mr-2 h-fit w-fit">
            <FaRegUser className="text-white text-sm " />
          </div>
          <div className="flex flex-col">
            <p className="bg-blue-100 p-2 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              facere animi officia maiores ad, adipisci, libero quo velit vero
              tenetur ipsum repellat doloremque architecto quam obcaecati
              dolorem incidunt aperiam blanditiis.
            </p>
            <span className="text-sm text-gray-500 p-2">1 min ago</span>
          </div>
        </div>
        <div className="self-end flex max-w-3/5">
          <div className="flex flex-col">
            <p className="bg-gray-100 p-2 rounded-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              facere animi officia maiores ad, adipisci, libero quo velit vero
              tenetur ipsum repellat doloremque architecto quam obcaecati
              dolorem incidunt aperiam blanditiis.
            </p>
            <span className="text-sm text-gray-500 p-2 self-end">
              1 min ago
            </span>
          </div>
        </div>
        <div className="flex max-w-3/5">
          <div className="bg-red-700 rounded-full p-3 m-1 mr-2 h-fit w-fit">
            <FaRegUser className="text-white text-sm " />
          </div>
          <div className="flex flex-col">
            <p className="bg-blue-100 p-2 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              facere animi officia maiores ad, adipisci, libero quo velit vero
              tenetur ipsum repellat doloremque architecto quam obcaecati
              dolorem incidunt aperiam blanditiis.
            </p>
            <span className="text-sm text-gray-500 p-2">1 min ago</span>
          </div>
        </div>
        <div className="self-end flex max-w-3/5">
          <div className="flex flex-col">
            <p className="bg-gray-100 p-2 rounded-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              facere animi officia maiores ad, adipisci, libero quo velit vero
              tenetur ipsum repellat doloremque architecto quam obcaecati
              dolorem incidunt aperiam blanditiis.
            </p>
            <span className="text-sm text-gray-500 p-2 self-end">
              1 min ago
            </span>
          </div>
        </div>
        <div className="self-end flex max-w-3/5">
          <div className="flex flex-col">
            <p className="bg-gray-100 p-2 rounded-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              facere animi officia maiores ad, adipisci, libero quo velit vero
              tenetur ipsum repellat doloremque architecto quam obcaecati
              dolorem incidunt aperiam blanditiis.
            </p>
            <span className="text-sm text-gray-500 p-2 self-end">
              1 min ago
            </span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* Bottom Section */}
      <div className="flex my-auto  gap-3 p-3 border-t border-t-gray-200 relative">
        <div className="flex items-center justify-between gap-5 ">
          <FaImage className="text-2xl text-gray-500" />
          <FaCamera className="text-2xl text-gray-500" />
          <MdEmojiEmotions
            className="text-2xl text-gray-500 "
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="absolute bottom-12 left-28 z-50">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} className="" />
          </div>
        </div>
        <div className="flex gap-5 flex-1">
          <input
            type="text"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="flex-1 border border-gray-300 p-3 rounded-2xl focus:outline-none "
          />
          <button>
            <IoSend className="text-2xl text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
