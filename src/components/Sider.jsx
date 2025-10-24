import React, { useState } from "react";
import { FaUserFriends, FaComments, FaUsers, FaCog } from "react-icons/fa";

import "./Sider.css";

function Sider() {
  const [active, setActive] = useState("users");
  return (
    <div className="sider">
      <div
        className={`icon &{active == "users ? "active" : ""}`}
        onClick={() => setActive("users")}
      >
        <FaUserFriends size={24} />
      </div>

      <div
        className={`icon &{active == "chats ? "active" : ""}`}
        onClick={() => setActive("chats")}
      >
        <FaComments size={24} />
      </div>

      <div
        className={`icon &{active == "users ? "groups" : ""}`}
        onClick={() => setActive("groups")}
      >
        <FaUsers size={24} />
      </div>

      <div
        className={`icon &{active == "settings ? "active" : ""}`}
        onClick={() => setActive("settings")}
      >
        <FaCog size={24} />
      </div>

      
    </div>
  );
}
export default Sider;
