import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaRegImage, FaAt } from "react-icons/fa";
import "./MessageInput.css";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="message-input">
      <FaAt className="icon" title="Mention someone" />
      <FaPaperclip className="icon" title="Attach file" />
      <FaRegImage className="icon" title="Send image" />

      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button onClick={handleSend} className="send-btn" title="Send message">
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default MessageInput;
