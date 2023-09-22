import FriendsUserList from "./friends.user.list";
import SearchBar from "../search.bar";

const FriendsBarContainer = () => {
  return (
    <div className="w-w537 h-full flex flex-col gap-10">
      <SearchBar />
      <div className="bg-white w-full h-full rounded-lg relative border-2 border-neutral-300 p-5 flex flex-col gap-5">
        <h1 className="text-4xl text-black/70 select-none">FRIENDS</h1>
        <div className="flex flex-col gap-5">
          <FriendsUserList type={"seen"} />
          <FriendsUserList type={"seen"} />
          <FriendsUserList type={"notif"} />
          <FriendsUserList type={null} />
        </div>
      </div>
    </div>
  );
};

export default FriendsBarContainer;
