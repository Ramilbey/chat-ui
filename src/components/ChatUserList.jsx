import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatUserList.css";

function ChatUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
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
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {users
        .filter((user) =>
          user.username.toLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((user) => (
          <div
            key={user.id}
            className={`user-item ${selectedUser === user.id ? "active" : ""}`}
            onClick={() => setSelectedUser(user.id)}
          >
            <img
              src={user.profileImage || "https://via.placeholder.com/40"}
              alt={user.username}
            />
            <span>{user.username}</span>
          </div>
        ))}
    </div>
  );
}

export default ChatUserList;
