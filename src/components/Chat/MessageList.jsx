import React from "react";
import "./MessageList.css"
const MessageList = ({ messages, fromUser }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message-item ${msg.fromUser === fromUser ? "sent" : "received"}`}
        >
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
