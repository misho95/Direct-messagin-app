import { Avatar } from "@mui/material";
import { useState } from "react";
import homeIcon from "../assets/images/codicon_home.png";
import messageIcon from "../assets/images/Vector.png";
import bellIcon from "../assets/images/bx_bell.png";
import settingsIcon from "../assets/images/ci_settings.png";
import exitIcon from "../assets/images/majesticons_door-exit.png";
import LeftNavBarLink from "./left.nav.bar.link";

const LeftNavBar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="w-w133 bg-purple rounded-lg h-full flex flex-col items-center justify-between py-6 gap-10">
      <div className="w-full flex flex-col items-center gap-10">
        <div className="w-fit h-fit border-4 rounded-full border-purpleDark shadow-sm">
          <Avatar
            alt="Remy Sharp"
            src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
            sx={{ width: 78, height: 78 }}
          />
        </div>
        <div className="w-full flex flex-col">
          <LeftNavBarLink
            id={0}
            activeLink={activeLink}
            link={"/"}
            icon={homeIcon}
            setActiveLink={setActiveLink}
          />
          <LeftNavBarLink
            id={1}
            activeLink={activeLink}
            link={"/"}
            icon={messageIcon}
            setActiveLink={setActiveLink}
          />
          <LeftNavBarLink
            id={2}
            activeLink={activeLink}
            link={"/"}
            icon={bellIcon}
            setActiveLink={setActiveLink}
          />
          <LeftNavBarLink
            id={3}
            activeLink={activeLink}
            link={"/"}
            icon={settingsIcon}
            setActiveLink={setActiveLink}
          />
        </div>
      </div>
      <button>
        <img src={exitIcon} />
      </button>
    </div>
  );
};

export default LeftNavBar;
