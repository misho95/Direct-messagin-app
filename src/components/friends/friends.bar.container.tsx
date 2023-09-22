import { activeFriend } from "../../utils/zustand";
import FriendsUserList from "./friends.user.list";
import SearchBar from "./search.bar";

const FriendsBarContainer = () => {
  const friendActive = activeFriend((state) => state.activeId);

  return (
    <div
      className={`${
        friendActive ? "hidden lg:flex" : "flex"
      } w-full sm:w-w537 h-full flex-col gap-10`}
    >
      <SearchBar />
      <div className="bg-white w-full h-h730 rounded-lg relative border-2 border-neutral-300 p-5 flex flex-col gap-5">
        <h1 className="text-4xl text-black/70 select-none">FRIENDS</h1>
        <div className="flex flex-col gap-5 overflow-y-auto scrollbar-thin">
          <FriendsUserList id={1} type={"seen"} />
          <FriendsUserList id={2} type={"seen"} />
          <FriendsUserList id={3} type={3} />
          <FriendsUserList id={4} type={null} />
          <FriendsUserList id={5} type={"seen"} />
          <FriendsUserList id={6} type={"seen"} />
          <FriendsUserList id={7} type={3} />
          <FriendsUserList id={8} type={null} />
          <FriendsUserList id={9} type={"seen"} />
          <FriendsUserList id={10} type={"seen"} />
          <FriendsUserList id={11} type={3} />
          <FriendsUserList id={12} type={null} />
        </div>
      </div>
    </div>
  );
};

export default FriendsBarContainer;
