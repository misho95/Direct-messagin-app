import ChatMessageComponent from "../components/chat/chat.message.component";
import FriendsBarContainer from "../components/friends/friends.bar.container";
import LeftNavBar from "../components/leftNav/left.nav.bar";
import Loading from "../components/loading";

const HomePage = () => {
  const data = true;

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-screen lg:h-screen bg-gray p-10 flex flex-col lg:flex-row gap-10 justify-center items-center">
      <LeftNavBar />
      <FriendsBarContainer />
      <ChatMessageComponent />
    </div>
  );
};

export default HomePage;
