import "./css/chat.css";
import React, { useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => Promise<void>;
}

const CustomMessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        type="text"
        value={newMessage}
        required
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button className="send-button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default CustomMessageInput;
