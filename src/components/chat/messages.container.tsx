import { useRef, useEffect } from "react";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const MessagesContainer = ({ children }: PropsType) => {
  const chatContainerRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col gap-7 pb-10 p-5 h-80 sm:h-full overflow-y-auto scrollbar-thin"
    >
      {children}
    </div>
  );
};

export default MessagesContainer;
