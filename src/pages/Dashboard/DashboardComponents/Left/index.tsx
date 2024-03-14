import { IconDoorExit } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../../@/components/ui/alert-dialog";

const SideMenu = () => {
  return (
    <div className="bg-gray-800/70 py-2 rounded-xl px-3 flex h-full flex-col items-center justify-between gap-4">
      <div className="bg-gray-700 flex flex-col items-center justify-center gap-2 w-full rounded-xl">
        {/* Image */}
        <div
          className="relative bg-cover bg-center w-full h-[90px] mb-6 rounded-tr-xl rounded-tl-xl"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1683009427513-28e163402d16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          <div
            className="absolute -bottom-5 left-[50%] -translate-x-[50%] h-[60px] w-[55px] bg-cover bg-center rounded-[38px]"
            style={{
              backgroundImage: `url(https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)`,
            }}
          />
        </div>
        <div className="hidden md:flex flex-col items-center justify-center text-md gap-2">
          <p className="font-bold text-gray-200 text-lg leading-none">
            John Doe
          </p>
          <p className="font-semibold text-gray-400 text-base leading-none">
            @johndoe_512
          </p>
          <p className="font-semibold text-gray-200 text-sm leading-none">
            &#10024; Socially Awkward Nerd &#10024;
          </p>
        </div>
        <div className="text-sm font-semibold border-y-[2px] my-2 border-gray-600 p-2 flex items-center justify-around w-full">
          {[
            { name: "Following", count: 312 },
            { name: "Posts", count: 81 },
            { name: "Followers", count: 118 },
          ].map((item, i) => (
            <>
              <div className="cursor-pointer hover:scale-105 duration-100 ease-in-out transition-all flex flex-col items-center justify-center">
                <p>{item.count}</p>
                <p className="text-gray-400">{item.name}</p>
              </div>
              {i != 2 && (
                <div className="cursor-pointer hover:scale-105 duration-100 ease-in-out transition-all w-[2px] h-full bg-gray-600" />
              )}
            </>
          ))}
        </div>
        <div className="flex cursor-pointer hover:underline font-bold pb-3 text-blue-400 justify-center items-center w-full">
          My Profile
        </div>
      </div>

      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <button className="group bg-red-500 w-full rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-200 ease-in-out p-3 justify-center flex items-center gap-2">
            <IconDoorExit />
            <p className="hidden md:flex font-semibold group-hover:font-bold text-xl">
              Logout
            </p>
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-black/90">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="dark">
            <AlertDialogCancel className="text-gray-300">
              Cancel
            </AlertDialogCancel>
            <Link to={`/welcome`}>
              <AlertDialogAction className="hover:bg-red-500 hover:text-white">
                Continue
              </AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SideMenu;
