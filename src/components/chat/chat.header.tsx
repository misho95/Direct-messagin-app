import { Avatar } from "@mui/material";
import callIcon from "../../assets/images/ci_phone-outline.png";
import cameraIcon from "../../assets/images/fluent_video-16-regular.png";
import dotsIcon from "../../assets/images/bi_three-dots-vertical.png";
import { activeFriend } from "../../utils/zustand";

const ChatHeader = () => {
  const clearFriendActive = activeFriend((state) => state.clear);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-10 border-b-px1 border-neutral-300 pb-8">
      <div className="flex gap-5 justify-center items-center select-none">
        <button
          onClick={clearFriendActive}
          className="bg-purple rounded-full w-8 h-6 flex sm:hidden justify-center items-center text-white select-none"
        >
          <span className="material-symbols-outlined text-sm w-fit h-fit">
            arrow_back_ios
          </span>
        </button>
        <div className="w-fit h-fit hidden sm:flex">
          <Avatar
            alt="Remy Sharp"
            src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
            sx={{ width: 75, height: 75 }}
          />
        </div>
        <div className="w-fit h-fit flex sm:hidden">
          <Avatar
            alt="Remy Sharp"
            src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
            sx={{ width: 55, height: 55 }}
          />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl">Anil</h1>
          <p className="text-black/50 text-sm sm:text-lg">
            ONLINE - Last seen, 2.02pm
          </p>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center gap-5">
        <button>
          <img src={callIcon} />
        </button>
        <button>
          <img src={cameraIcon} />
        </button>
        <button>
          <img src={dotsIcon} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
