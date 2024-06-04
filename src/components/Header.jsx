import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import {
  RiArrowRightDoubleLine,
  RiInstallLine,
  RiSaveLine,
} from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700 ">
      <div className="flex items-center space-x-2">
        <div className="bg-[#2C2D32] p-2 rounded-lg">
          <RiArrowRightDoubleLine className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <select className="bg-[#2C2D32] text-white p-2 text-sm rounded-lg focus:outline-none md:text-base">
          <option>Example Session</option>
          <option>Session 1</option>
          <option>Session 2</option>
        </select>
        <button className="flex items-center space-x-1 text-sm bg-[#2C2D32] p-2 rounded-lg md:text-base">
          <FiUpload className="w-5 h-5" />
          <span>Upload Files</span>
        </button>
      </div>
      <div className="flex space-x-2 md:space-x-4">
        <button className="p-1 bg-[#2C2D32] rounded-lg md:p-2">
          <RiSaveLine className="w-5 h-5" />
        </button>
        <button className="p-1 bg-[#2C2D32] rounded-lg md:p-2">
          <FiUpload className="w-5 h-5" />
        </button>
        <button className="p-1 bg-[#2C2D32] rounded-lg md:p-2">
          <FaRegCopy className="w-5 h-5" />
        </button>
        <button className="p-1 bg-[#2C2D32] rounded-lg md:p-2">
          <RiInstallLine className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
