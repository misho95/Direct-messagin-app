import { Link } from "react-router-dom";

const LeftNavBarLink = ({ id, activeLink, link, icon, setActiveLink }) => {
  return (
    <Link
      to={link}
      onClick={() => setActiveLink(id)}
      className={`${
        id === activeLink ? "bg-purpleHover" : ""
      } w-full h-h98 flex justify-center items-center relative`}
    >
      <img src={icon} className="select-none" />
      {id === activeLink && (
        <div className="absolute right-0 h-full w-w7 bg-yellow"></div>
      )}
    </Link>
  );
};

export default LeftNavBarLink;
