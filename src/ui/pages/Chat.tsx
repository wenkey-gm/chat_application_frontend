import { useCallback, useEffect, useState } from "react";
import ChatHeader from "../components/ChatHeader";
import CustomMessageInput from "../components/CustomMessageinput";
import CustomMessageList from "../components/CustomMessageList";
import { Message } from "../../models/Message";
import { fetchUserMessages, saveMessage } from "../../data/api";
import { useParams } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userId, setUserId] = useState<number>(1);

  const { email } = useParams<{ email: string }>();

  const loadMessages = useCallback(async () => {
    try {
      const user = await fetchUserMessages(email ?? "one@gmail.com");
      setMessages(user.messages);
      setUserId(user.id);
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  }, [email]);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) {
      return;
    }
    try {
      const newMessage = await saveMessage(message, false, userId);
      setMessages((prev) => [...prev, newMessage]);
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
