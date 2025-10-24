import React from "react";
import "./SearchMessage.css"

const SearchMessage = ({ onSearch }) => {
  return (
    <div className="search-message">
      <input
        type="text"
        placeholder="Search messages..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchMessage;
