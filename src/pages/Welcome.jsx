import React, { useRef } from "react";
import welcome from "../assets/images/Ellipse 1446.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  const imgRef = useRef(null);

  return (
    <div
      onMouseEnter={() => {
        imgRef.current.className =
          "h-screen w-screen bg-no-repeat bg-cover opacity-80 transition duration-300";
      }}
      onMouseLeave={() => {
        imgRef.current.className = "h-screen w-screen bg-no-repeat bg-cover";
      }}
    >
      <img
        ref={imgRef}
        src={welcome}
        alt="wlecome"
        className="h-screen w-screen bg-no-repeat bg-cover "
      />
      <div className=" absolute inset-0">
        <div className="flex h-full w-full items-center justify-center flex-col">
          <h1 className="text-5xl md:text-9xl font-bold text-white mb-8">
            AI-Powered <br /> Productivity.
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6">
            AI-Powered Tools In One To Supercharge Your Team Productivity.
            <br />
            With Taskade, All Your Work Is In Sync In One Unified Workspace.
          </p>
          <Link
            to="/signup"
            className="py-2 px-14 border-2 border-[#FF805F] text-xl text-white rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
