import { useEffect } from "react";
import List from "./components/List";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Notification from "./components/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

function App() {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
    return () => {
      unSub();
    };
  }, []);
  return (
    <>
      {user ? (
        <div className="flex justify-between m-5 rounded shadow  h-[95vh]">
          <List />
          <Chat />
          <Detail />
        </div>
      ) : (
        <div className="m-5 rounded shadow  h-[95vh]">
          <Login />
        </div>
      )}
      <Notification />
    </>
  );
}

export default App;
