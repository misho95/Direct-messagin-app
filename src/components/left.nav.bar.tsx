import { Avatar } from "@mui/material";

const LeftNavBar = () => {
  return (
    <div className="w-w133 bg-purple rounded-lg h-full flex flex-col items-center py-6">
      <div className="w-fit h-fit border-4 rounded-full border-purpleDark shadow-sm">
        <Avatar
          alt="Remy Sharp"
          src="https://www.beautycrew.com.au/media/54105/jodie-comer-most-beautiful-woman-l.png?width=1150"
          sx={{ width: 78, height: 78 }}
        />
      </div>
    </div>
  );
};

export default LeftNavBar;
