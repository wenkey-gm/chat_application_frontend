import React, { useCallback, useEffect, useRef, useState } from "react";
import ChatHeader from "../components/ChatHeader";
import CustomMessageInput from "../components/CustomMessageinput";
import CustomMessageList from "../components/CustomMessageList";
import { Message } from "../../models/Message";
import { fetchUserMessages, saveMessage } from "../../data/api";
import { useParams } from "react-router-dom";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userId, setUserId] = useState<number>(1);
  const websocket = useRef<WebSocket | null>(null);
  const { token } = useParams<{ token: string }>();

  const loadMessages = useCallback(async () => {
    try {
      const user = await fetchUserMessages(token ?? "one@gmail.com");
      setMessages(user.messages);
      setUserId(user.id);
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  }, [token]);

  useEffect(() => {
    loadMessages();

    websocket.current = new WebSocket("ws://websocket-echo.com");

    websocket.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    websocket.current.onmessage = async (event: { data: string; }) => {
      const receivedMessage = event.data;
      try {
        const newMessage = await saveMessage(token, receivedMessage, true, userId);
        setMessages((prev: Message[]) => [...prev, newMessage]);
      } catch (error) {
        console.error("Error saving received message:", error);
      }
    };

    websocket.current.onerror = (error: any) => {
      console.error("WebSocket error:", error);
    };

    websocket.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (websocket.current) {
        websocket.current.close();
      }
    };
  }, [loadMessages, userId]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || !websocket.current) {
      return;
    }
    websocket.current.send(message);
    try {
      const newMessage = await saveMessage(token, message, false, userId);
      setMessages((prev: Message[]) => [...prev, newMessage]);
    } catch (error) {
      console.error("Error saving sent message:", error);
    }
  };

  return (
    <>
      <div className="chat-ui-container">
        <ChatHeader />
        <CustomMessageList messages={messages} />
        <CustomMessageInput onSendMessage={handleSendMessage} />
      </div>
    </>
  );
};

export default Chat;
