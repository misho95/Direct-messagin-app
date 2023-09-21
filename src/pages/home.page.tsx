import ChatMessageComponent from "../components/chat/chat.message.component";
import FriendsBarContainer from "../components/friends/friends.bar.container";
import LeftNavBar from "../components/leftNav/left.nav.bar";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gray p-10 flex gap-10">
      <LeftNavBar />
      <FriendsBarContainer />
      <ChatMessageComponent />
    </div>
  );
};

export default HomePage;
