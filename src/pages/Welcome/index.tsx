import { useState } from "react";
import { Spotlight } from "../../components/Welcome/spotlight";
import { SignupFormDemo } from "./signup";
import { LoginFormDemo } from "./login";

const Intro = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="dark h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="top-[70px] left-40 md:left-60 md:top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl mx-auto absolute md:-left-40 z-10 w-full pt-20 md:pt-0">
        <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Welcome to <br /> Hike.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Connect with one other and socialize.
        </p>
      </div>
      <div className="hidden min-w-[500px] h-[96%] z-10 p-4 absolute right-14 bg-gray-600/[0.32] rounded-xl antialiased md:flex flex-col justify-center items-start ">
        {login ? (
          <LoginFormDemo setLogin={setLogin} />
        ) : (
          <SignupFormDemo setLogin={setLogin} />
        )}
      </div>
    </div>
  );
};

export default Intro;
