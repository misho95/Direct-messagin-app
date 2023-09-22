import { Avatar } from "@mui/material";
import callIcon from "../../assets/images/ci_phone-outline.png";
import cameraIcon from "../../assets/images/fluent_video-16-regular.png";
import dotsIcon from "../../assets/images/bi_three-dots-vertical.png";

const ChatHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-10 border-b-px1 border-neutral-300 pb-8">
      <div className="flex gap-5 justify-center items-center select-none">
        <Avatar
          alt="Remy Sharp"
          src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
          sx={{ width: 75, height: 75 }}
        />
        <div>
          <h1 className="text-2xl">Anil</h1>
          <p className="text-black/50 text-lg">ONLINE - Last seen, 2.02pm</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
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
