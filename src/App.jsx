import React from "react";
import Sider from "./components/Sider";
import ChatUserList from "./components/ChatUserList"
import Group from "./components/Groups";
// import Chat from "./components/Chat"
import "./App.css";

function App() {
  return (
    <div className="app-container">
  <div className="sider">
    <Sider />
  </div>

  <div className="left-panel">
    <ChatUserList />
    <div className="spacer"></div>
    <Group />
  </div>

  {/* <div className="chat-area">
    <Chat />
  </div> */}

  {/* <div className="user-details">
    <UserDetails />
  </div> */}
</div>

   
  );
}

export default App;
