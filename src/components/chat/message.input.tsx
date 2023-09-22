import micIcon from "../../assets/images/bi_mic-fill.png";
import attachIcon from "../../assets/images/ant-design_paper-clip-outlined.png";
import smileIcon from "../../assets/images/fluent_emoji-laugh-16-regular.png";
import cameraIcon from "../../assets/images/fluent_camera-24-regular.png";

const MessageInput = () => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="w-full h-h79 relative">
        <button className="absolute left-3 top-1/2 -translate-y-1/2">
          <img src={attachIcon} />
        </button>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
          <button>
            <img src={smileIcon} />
          </button>
          <button>
            <img src={cameraIcon} />
          </button>
        </div>
        <textarea
          placeholder="Type your message here..."
          className="bg-lightBlue resize-none w-full h-h79 rounded-lg focus:outline-none p-3 border-px1 border-neutral-300 pl-16"
        />
      </div>
      <button className="bg-purple w-w78 h-h78 flex justify-center items-center rounded-2xl">
        <img src={micIcon} />
      </button>
    </div>
  );
};

export default MessageInput;
