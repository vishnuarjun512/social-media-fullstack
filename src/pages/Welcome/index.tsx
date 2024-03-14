import { useState } from "react";
import { Spotlight } from "../../components/Welcome/spotlight";
import { SignupFormDemo } from "./signup";
import { LoginFormDemo } from "./login";

const Intro = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="dark grid md:grid-cols-12 relative bg-black/[0.96] antialiased">
      <div className=" h-screen w-full flex items-center justify-center relative overflow-hidden col-span-8">
        <Spotlight
          className="top-[70px] left-20 md:left-60 md:top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl mx-auto flex items-center justify-center flex-col z-10 w-full pt-20 md:pt-0">
          <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Welcome to <br /> Hike.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Connect with one other and socialize.
          </p>
        </div>
      </div>
      <div className="hidden h-full z-10 p-4 md:block col-span-4">
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
