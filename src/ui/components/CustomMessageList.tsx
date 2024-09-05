import { Message } from "../../models/Message";
import "./css/chat.css";
import React from "react";

interface MessageListProps {
  messages: Message[];
}

const CustomMessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="messages-container">
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            className={`message ${message.is_received ? "received" : "sent"}`}
          >
            <strong>{message.is_received ? "User:" : "You:"}</strong>{" "}
            <p className="message-text">{message.content}</p>
            <span className="message-time">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CustomMessageList;
