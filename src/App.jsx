import { useEffect } from "react";
import List from "./components/List";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Notification from "./components/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      const unSub = onAuthStateChanged(auth, (user) => {
        if (user) {
          fetchUserInfo(user.uid);
        } else {
          fetchUserInfo(null);
        }
      });
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      {currentUser ? (
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
