// src/components/Chat/Chat.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css";
import SearchMessage from "./SearchMessage";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chat = ({ selectedUserId }) => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const fromUser = 5;

  // 1️⃣ Fetch messages using corsproxy
  useEffect(() => {
    if (!selectedUserId) return;

    const url = `https://mock-test.worthycodes.com/api/chatSystem/chatByUserId/${selectedUserId}`;
    // Try corsproxy.io instead
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;

    console.log('🔍 Fetching messages for user:', selectedUserId);
    setLoading(true);

    axios
      .get(proxyUrl)
      .then((res) => {
        console.log('✅ Fetched messages:', res.data);
        // Handle if data is wrapped or direct array
        const messageData = Array.isArray(res.data) ? res.data : res.data.data || [];
        setMessages(messageData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching chats:", err);
        setMessages([]); // Reset to empty array on error
        setLoading(false);
      });
  }, [selectedUserId]);

  // 2️⃣ Handle sending message
  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;
  
    try {
      const body = { fromUser, toUser: selectedUserId, message: messageText };
      const url = 'https://mock-test.worthycodes.com/api/chatSystem/chat/add';
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
  
      const res = await axios.post(proxyUrl, body, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      console.log('✅ Message sent:', res.data);
  
      // Always append your message to UI immediately
      const newMessage = {
        id: Date.now(), // temporary unique id
        fromUser,
        toUser: selectedUserId,
        message: messageText,
        timestamp: Date.now(),
        image: null
      };
  
      setMessages((prev) => [...prev, newMessage]);
    } catch (err) {
      console.error("❌ Error sending message:", err);
      alert('Failed to send message: ' + (err.response?.data?.message || err.message));
    }
  };
  

  // 3️⃣ Filter messages - FIX: Check if messages is array and message exists
  const filteredMessages = Array.isArray(messages) 
    ? messages.filter(msg => 
        msg && msg.message && msg.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  
  return (
    <div className="chat-container">
      <SearchMessage onSearch={setSearchTerm} />
      {loading && <div style={{textAlign: 'center', padding: '20px'}}>Loading messages...</div>}
      <MessageList messages={filteredMessages} fromUser={fromUser} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default Chat;