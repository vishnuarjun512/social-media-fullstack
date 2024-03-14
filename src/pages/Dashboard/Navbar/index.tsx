import { LabelInputContainer } from "../../Welcome/login";

import { Input } from "../../../components/FormComponents/input";
import {
  IconArrowDown,
  IconBookmark,
  IconHome,
  IconMessage,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../@/components/ui/popover";

const index = () => {
  return (
    <div className="w-full h-[7%] px-3 flex justify-between">
      <form className="dark flex items-center justify-start w-[20%] gap-2">
        <LabelInputContainer className="">
          <Input
            id="email"
            placeholder="Search anything..."
            className=""
            type="text"
          />
        </LabelInputContainer>
        <IconSearch className="bg-gray-600 rounded-full h-8 w-8 p-1 hover:scale-105 transition-all duration-200 ease-out cursor-pointer" />
      </form>
      <div className=" flex justify-center items-center gap-2">
        <div className="group hover:cursor-pointer flex gap-2 bg-custom-black/[1] p-3 rounded-[35px] hover:bg-gray-300 hover:scale-105 duration-200 ease-in-out transition-all">
          <IconHome className="group-hover:text-black" />
          <p className="group-hover:text-black font-semibold">Home</p>
        </div>
        <div className="group hover:cursor-pointer flex gap-2 bg-custom-black/[1] p-3 rounded-[35px] hover:bg-gray-300 hover:scale-105 duration-200 ease-in-out transition-all">
          <IconMessage className="group-hover:text-black" />
          <p className="group-hover:text-black font-semibold">Messages</p>
        </div>
        <div className="group hover:cursor-pointer flex gap-2 bg-custom-black/[1] p-3 rounded-[35px] hover:bg-gray-300 hover:scale-105 duration-200 ease-in-out transition-all">
          <IconSettings className="group-hover:text-black" />
          <p className="group-hover:text-black font-semibold">Settings</p>
        </div>
        <div className="group hover:cursor-pointer flex gap-2 bg-custom-black/[1] p-3 rounded-[35px] hover:bg-gray-300 hover:scale-105 duration-200 ease-in-out transition-all">
          <IconBookmark className="group-hover:text-black" />
          <p className="group-hover:text-black font-semibold">Saved</p>
        </div>
      </div>

      <Popover>
        <PopoverTrigger className="w-[175px]">
          <div className="bg-gray-600 px-3 py-1 rounded-xl flex items-center justify-around gap-1 hover:scale-105 duration-200 transition-all ease-in-out">
            <div
              className="h-[35px] w-[30px] bg-cover bg-center rounded-[38px]"
              style={{
                backgroundImage: `url(https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)`,
              }}
            />
            <p className="font-semibold">John Doe</p>
            <IconArrowDown stroke={"4"} className="h-4 w-4" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="dark w-[170px] p-3">
          <div className=" flex w-full flex-col items-start justify-center p-1 gap-1">
            {["Profile", "Settings", "Logout"].map((item, i) => (
              <div
                key={i}
                className={`text-gray-300 w-full bg-gray-900 ${
                  item == "Logout" ? "hover:bg-red-400" : "hover:bg-gray-400/50"
                } hover:cursor-pointer p-2 rounded-xl`}
              >
                {item}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default index;
