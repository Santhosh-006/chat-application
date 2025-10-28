import {} from "react";
import List from "./components/List";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  const user = false;
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
    </>
  );
}

export default App;
