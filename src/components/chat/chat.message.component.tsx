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
    <div className="bg-white w-full lg:w-w952 h-h700 sm:h-full rounded-lg relative border-2 border-neutral-300 p-5 flex flex-col justify-between">
      <ChatHeader />
      <MessagesContainer>
        <Message type={"recive"} message={"Hey There!"} seen={true} />
        <Message type={"recive"} message={"How are you?"} seen={true} />
        <Message type={"send"} message={"Hello!"} seen={true} />
        <Message
          type={"send"}
          message={"I am fine and how are you?"}
          seen={true}
        />
        <Message
          type={"recive"}
          message={"I am doing well, Can we meet tommorow?"}
          seen={true}
        />
        <Message type={"send"} message={"Yes Sure!"} seen={true} />
        <Message type={"recive"} message={"Hey There!"} seen={true} />
        <Message type={"recive"} message={"How are you?"} seen={true} />
        <Message type={"send"} message={"Hello!"} seen={true} />
        <Message
          type={"send"}
          message={"I am fine and how are you?"}
          seen={true}
        />
        <Message
          type={"recive"}
          message={"I am doing well, Can we meet tommorow?"}
          seen={true}
        />
        <Message type={"send"} message={"Yes Sure!"} seen={true} />
        <Message type={"recive"} message={"Hey There!"} seen={true} />
        <Message type={"recive"} message={"How are you?"} seen={true} />
        <Message type={"send"} message={"Hello!"} seen={true} />
        <Message
          type={"send"}
          message={"I am fine and how are you?"}
          seen={true}
        />
        <Message
          type={"recive"}
          message={"I am doing well, Can we meet tommorow?"}
          seen={true}
        />
        <Message type={"send"} message={"Yes Sure!"} seen={false} />
      </MessagesContainer>
      <MessageInput />
    </div>
  );
};

export default ChatMessageComponent;
