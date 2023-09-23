import { Link } from "react-router-dom";

interface PropsType {
  link: string;
  icon: string;
  notif: number;
}

const LeftNavBarLink = ({ link, icon, notif }: PropsType) => {
  return (
    <Link
      to={link}
      className={`w-10 lg:w-full h-10 lg:h-h98 flex justify-center items-center relative group lg:hover:bg-purpleHover`}
    >
      <img src={icon} className="select-none" />

      <div className="absolute bottom-0 lg:right-0 h-h7 lg:h-full  w-full sm:w-w7 bg-yellow hidden lg:group-hover:flex"></div>
      {notif > 0 && (
        <div className="absolute top-0 right-0 sm:top-5 sm:right-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full text-white sm:text-lg bg-red-500 flex justify-center items-center">
          {notif}
        </div>
      )}
    </Link>
  );
};

export default LeftNavBarLink;
