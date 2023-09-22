import { Avatar } from "@mui/material";
import { useState } from "react";

interface PropsType {
  type: string;
  message: string;
}

const Message = ({ type, message }: PropsType) => {
  const [showTime, setShowTime] = useState(false);

  return (
    <div
      className={`flex ${
        type === "recive" ? "justify-start" : "justify-end"
      } w-full select-none p-1`}
    >
      <div
        className={`flex flex-col gap-1 ${
          type === "recive" ? "items-start" : "items-end"
        } relative w-full`}
      >
        <div
          onClick={() => setShowTime(!showTime)}
          className={`${
            type === "recive" ? "bg-gray text-black" : "bg-purple text-white"
          } w-fit h-fit p-3 rounded-2xl`}
        >
          {message}
        </div>
        {showTime && (
          <div
            className={`text-black/50 absolute ${
              type === "recive" ? "-bottom-7 left-3" : "-bottom-7 right-3"
            } w-fit`}
          >
            Today, 8.34pm
          </div>
        )}
        <div
          className={`w-fit h-fit absolute ${
            type === "recive" ? "-left-4 -bottom-4" : "-right-4 -bottom-4"
          }`}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
            sx={{ width: 18, height: 18 }}
          />
        </div>
      </div>
    </div>
  );
};
export default Message;
