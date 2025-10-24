import React from "react";
import Sider from "./components/Sider";
import ChatUserList from "./components/ChatUserList"
// import Chat from "./components/Chat"
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sider />
      <ChatUserList />
      {/* <Chat />  */}
    </div>
  );
}

export default App;
