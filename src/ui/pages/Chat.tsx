import { useCallback, useEffect, useState } from "react";
import ChatHeader from "../components/ChatHeader";
import CustomMessageInput from "../components/CustomMessageinput";
import CustomMessageList from "../components/CustomMessageList";
import { Message } from "../../models/Message";
import { fetchUserMessages } from "../../data/api";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const loadMessages = useCallback(async () => {
    try {
      const user = await fetchUserMessages("one@gmail.com");
      setMessages(user.messages);
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  }, []);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  const handleSendMessage = async (message: string) => {};

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
