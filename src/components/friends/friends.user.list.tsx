import { Avatar } from "@mui/material";
import seenIcon from "../../assets/images/charm_tick-double.png";
import { activeFriend } from "../../utils/zustand";

const FriendsUserList = ({ id, type }) => {
  const setActiveFriend = activeFriend((state) => state.setActive);

  return (
    <div
      onClick={() => setActiveFriend(id)}
      className="flex justify-between items-center border-b-px1 border-neutral-300 pb-3 select-none cursor-pointer"
    >
      <div className="flex gap-5">
        <Avatar
          alt="Remy Sharp"
          src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
          sx={{ width: 50, height: 50 }}
        />
        <div>
          <h1 className="text-xl font-bold">Anil</h1>
          <p className="text-lg text-black/70">Aprul fool's day</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-end">
        <p className="text-black/50">Today, 9.52pm</p>
        {type === "seen" && <img src={seenIcon} className="w-fit h-fit" />}
        {typeof type === "number" && (
          <div className="bg-red-500 rounded-full w-w30 h-h30 flex justify-center items-center text-white text-lg">
            {type}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsUserList;
