import { activeFriend } from "../../utils/zustand";
import ChatHeader from "./chat.header";
import Message from "./message";
import MessageInput from "./message.input";
import MessagesContainer from "./messages.container";

const ChatMessageComponent = () => {
  const friendActive = activeFriend((state) => state.activeId);

  if (!friendActive) {
    return;
  }

  return (
    <div className="bg-white w-full lg:w-w952 h-full rounded-lg relative border-2 border-neutral-300 p-5 flex flex-col justify-between">
      <ChatHeader />
      <MessagesContainer>
        <Message type={"recive"} message={"Hey There!"} />
        <Message type={"recive"} message={"How are you?"} />
        <Message type={"send"} message={"Hello!"} />
        <Message type={"send"} message={"I am fine and how are you?"} />
        <Message
          type={"recive"}
          message={"I am doing well, Can we meet tommorow?"}
        />
        <Message type={"send"} message={"Yes Sure!"} />
        <Message type={"recive"} message={"Hey There!"} />
        <Message type={"recive"} message={"How are you?"} />
        <Message type={"send"} message={"Hello!"} />
        <Message type={"send"} message={"I am fine and how are you?"} />
        <Message
          type={"recive"}
          message={"I am doing well, Can we meet tommorow?"}
        />
        <Message type={"send"} message={"Yes Sure!"} />
        <Message type={"recive"} message={"Hey There!"} />
        <Message type={"recive"} message={"How are you?"} />
        <Message type={"send"} message={"Hello!"} />
        <Message type={"send"} message={"I am fine and how are you?"} />
        <Message
          type={"recive"}
          message={"I am doing well, Can we meet tommorow?"}
        />
        <Message type={"send"} message={"Yes Sure!"} />
      </MessagesContainer>
      <MessageInput />
    </div>
  );
};

export default ChatMessageComponent;
