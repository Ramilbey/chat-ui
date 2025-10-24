import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Groups.css";

function Groups() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        async function fetchGroups() {
            try {
                const url = "https://mock-test.worthycodes.com/api/chatSystem/groups/list";
                const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
                    url
                )}`;
                const res = await axios.get(proxyUrl);
                setGroups(res.data);
            } catch (error) {
                console.error("Error fetching Groups: ", error);

            } finally {
                setLoading(false);
            }
        }
        fetchGroups();
    }, []);
    if(loading ) return <div className="groups"> Loading Groups...</div>
    return (
        <div className="groups">
      {groups.map((group) => (
        <div
          key={group.id}
          className={`group-item ${selectedGroup === group.id ? "active" : ""}`}
          onClick={() => setSelectedGroup(group.id)}
        >
          <div className="group-avatar">
            {group.name.charAt(0).toUpperCase()}
          </div>
          <span>{group.name}</span>
        </div>
      ))}
    </div>
  );
}
export default Groups;