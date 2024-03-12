import SideMenu from "./DashboardComponents/Left";
import Center from "./DashboardComponents/Center";
import RightMenu from "./DashboardComponents/Right";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="bg-black/[0.96] antialiased h-[100vh] text-gray-200 overflow-hidden p-1">
      <Navbar />
      <div className="grid h-[93%] grid-cols-7 md:grid-cols-5">
        <SideMenu />
        <Center />
        <RightMenu />
      </div>
    </div>
  );
};

export default Dashboard;
