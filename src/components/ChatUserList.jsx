import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatUserList.css";

function ChatUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null); // ✅ Add this state

  useEffect(() => {
    async function fetchUsers() {
      try {
        // Using AllOrigins CORS proxy
        const url =
          "https://mock-test.worthycodes.com/api/chatSystem/users/list";
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
          url
        )}`;

        const res = await axios.get(proxyUrl);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div className="chat-user-list">Loading Users...</div>;

  return (
    <div className="chat-user-list">
      {users.map((user) => (
        <div
          key={user.id}
          className={`user-item ${selectedUser === user.id ? "active" : ""}`}
          onClick={() => setSelectedUser(user.id)} // ✅ Fixed: use setSelectedUser
        >
          <img 
            src={user.profileImage || "https://via.placeholder.com/40"} // ✅ Fixed: use profileImage
            alt={user.username} // ✅ Fixed: alt should be username
          />
          <span>{user.username}</span> {/* ✅ Fixed: span outside img */}
        </div>
      ))}
    </div>
  );
}

export default ChatUserList;