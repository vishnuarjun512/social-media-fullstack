import Notifications from "./Notifications";
import Suggestions from "./Suggestions";

const RightMenu = () => {
  return (
    <div className="h-full dark bg-gray-800/70 rounded-xl p-3 hidden md:flex flex-col gap-6 items-start w-full">
      <Notifications />
      <Suggestions />
    </div>
  );
};

export default RightMenu;
