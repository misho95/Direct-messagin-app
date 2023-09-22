import { Avatar } from "@mui/material";
import bellIcon from "../../assets/images/bx_bell.png";
import settingsIcon from "../../assets/images/ci_settings.png";
import exitIcon from "../../assets/images/majesticons_door-exit.png";
import LeftNavBarLink from "./left.nav.bar.link";

const LeftNavBar = () => {
  return (
    <div className="w-full lg:w-w133 bg-purple rounded-lg h-20 lg:h-full flex flex-row lg:flex-col items-center justify-between py-6 gap-10 overflow-hidden">
      <div className="w-full flex flex-row lg:flex-col items-center gap-1 lg:gap-10 px-2 lg:px-0">
        <div className="hidden lg:flex w-fit h-fit border-4 rounded-full border-purpleDark shadow-sm">
          <Avatar
            alt="Remy Sharp"
            src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
            sx={{ width: 78, height: 78 }}
          />
        </div>
        <div className="flex lg:hidden w-fit h-fit border-4 rounded-full border-purpleDark shadow-sm">
          <Avatar
            alt="Remy Sharp"
            src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
            sx={{ width: 48, height: 48 }}
          />
        </div>
        <div className="w-full flex flex-row lg:flex-col">
          <LeftNavBarLink link={"/"} icon={bellIcon} />
          <LeftNavBarLink link={"/"} icon={settingsIcon} />
        </div>
      </div>
      <button className="p-2 w-fit h-fit">
        <img src={exitIcon} />
      </button>
    </div>
  );
};

export default LeftNavBar;
