import React, { useState } from "react";
import Sider from "./components/Sider";
import ChatUserList from "./components/ChatUserList"
import Groups from "./components/Groups";
import Chat from "./components/Chat/Chat";
import "./App.css";

function App() {
  // ✅ Add state to track selected user
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="app-container">
      <div className="sider">
        <Sider />
      </div>

      <div className="left-panel">
        {/* ✅ Pass setSelectedUserId to ChatUserList so it can update when user clicks */}
        <ChatUserList onSelectUser={setSelectedUserId} />
        <div className="spacer"></div>
        <Groups />
      </div>

      <div className="chat-area">
        {/* ✅ Pass selectedUserId to Chat */}
        {selectedUserId ? (
          <Chat selectedUserId={selectedUserId} />
        ) : (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: '#666' 
          }}>
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
}

export default App;