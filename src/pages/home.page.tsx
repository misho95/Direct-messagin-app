import FriendsBarContainer from "../components/friends.bar.container";
import LeftNavBar from "../components/left.nav.bar";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gray p-10 flex gap-10">
      <LeftNavBar />
      <FriendsBarContainer />
    </div>
  );
};

export default HomePage;
