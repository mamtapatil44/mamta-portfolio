import React from "react";
import { HOME_CONTENT } from "../constants";
import profilePic from "../assets/mamtaProfile.png"

const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl pb-12 tracking-tighter font-thin lg:mt-12 lg:text-5xl">
              Mamta Patil
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        bg-clip-text tracking-tighter font-3xl text-transparent"
            >
              Software Engineer (Full Stack Developer)
            </span>
            <p className="my-6 max-w-xl py-6 font-light tracking-tighter">
              {HOME_CONTENT}
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img  className="rounded-2xl" src={profilePic} alt="Profile Pic"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
