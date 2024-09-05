import "./css/chat.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChatHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="chat-header">
      <h2>Chat Room</h2>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default ChatHeader;
