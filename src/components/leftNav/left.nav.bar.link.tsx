import { Link } from "react-router-dom";

const LeftNavBarLink = ({ id, link, icon }) => {
  return (
    <Link
      to={link}
      className={`w-20 lg:w-full h-20 lg:h-h98 flex justify-center items-center relative group lg:hover:bg-purpleHover`}
    >
      <img src={icon} className="select-none" />

      <div className="absolute bottom-0 lg:right-0 h-h7 lg:h-full  w-full sm:w-w7 bg-yellow hidden lg:group-hover:flex"></div>
    </Link>
  );
};

export default LeftNavBarLink;
