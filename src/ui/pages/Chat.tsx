import { useState } from "react";
import ChatHeader from "../components/ChatHeader";
import CustomMessageInput from "../components/CustomMessageinput";
import CustomMessageList from "../components/CustomMessageList";
import { Message } from "../../models/Message";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

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
