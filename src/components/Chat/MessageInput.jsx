import React, { useState } from "react";
import { FaPaperclip, FaImage, FaAt, FaPaperPlane } from "react-icons/fa";
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
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <div className="message-actions">
        <FaAt className="icon" title="Mention" />
        <FaPaperclip className="icon" title="Attach file" />
        <FaImage className="icon" title="Send image" />
        <button onClick={handleSend} className="send-btn">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
