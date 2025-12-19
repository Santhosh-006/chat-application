import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Loged In Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    console.log(username);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("User Registered Successfully ! You can Login Now");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-6 justify-center items-center h-full">
      <div className="flex flex-col gap-4 m-3 rounded-2xl p-7  shadow-xl ">
        <p className="text-4xl font-bold">Welcome Back !</p>
        <form action="" onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            className="mb-1 p-2 outline-none focus:ring-1 focus:ring-blue-700 rounded-sm bg-gray-50"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="mb-1 p-2 outline-none focus:ring-1 focus:ring-blue-700 rounded-sm bg-gray-50"
          />
          <button
            disabled={loading}
            type="submit"
            className="p-2 rounded bg-blue-600 text-white cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? "Loading" : "Login"}
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4 m-3 p-5 rounded-xl shadow-xl">
        <p className="text-4xl font-bold">Create An Account...</p>
        <form
          action=""
          onSubmit={handleRegister}
          className="flex flex-col gap-3"
        >
          <label htmlFor="file" className="flex items-center cursor-pointer">
            {avatar.url ? (
              <img
                src={avatar.url}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover m-1"
              />
            ) : (
              <div className="bg-red-700 rounded-full p-3 m-1 mr-2 h-fit w-fit">
                <FaRegUser className="text-white text-sm" />
              </div>
            )}
            <span>Upload your image</span>
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleAvatar}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="mb-1 p-2 outline-none focus:ring-1 focus:ring-blue-700 rounded-sm bg-gray-50"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="mb-1 p-2 outline-none focus:ring-1 focus:ring-blue-700 rounded-sm bg-gray-50"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="mb-1 p-2 outline-none focus:ring-1 focus:ring-blue-700 rounded-sm bg-gray-50"
          />
          <button
            disabled={loading}
            type="submit"
            className="p-2 rounded bg-blue-600 text-white cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? "Loading" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
