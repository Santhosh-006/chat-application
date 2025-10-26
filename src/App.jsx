import {} from "react";
import List from "./components/List";
import Chat from "./components/Chat";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="flex justify-between m-5 rounded shadow  h-[95vh]">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
