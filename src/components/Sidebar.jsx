import React from "react";
import { FiHome, FiMessageSquare, FiFile, FiArrowLeft } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { HiChip } from "react-icons/hi";
import { PiFolderSimpleStarFill } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { TbArrowsMoveVertical } from "react-icons/tb";

const Sidebar = () => {
  const menu = [
    {
      path: "/home",
      name: "Dashboard",
      icon: <FiHome className="w-6 h-6 ml-3 mr-2" />,
    },
    {
      path: "/Chatbots",
      name: "Chatbots",
      icon: <FiMessageSquare className="w-6 h-6 ml-3 mr-2" />,
    },
    {
      path: "/Files",
      name: "Files",
      icon: <FiFile className="w-6 h-6 ml-3 mr-2" />,
    },
    {
      path: "/Prompts",
      name: "Prompts",
      icon: <FaRegFileAlt className="w-6 h-6 ml-3 mr-2" />,
    },
    {
      path: "/File",
      name: "File Wizard",
      icon: <PiFolderSimpleStarFill className="w-6 h-6 ml-3 mr-2" />,
    },
    {
      path: "/API",
      name: "API",
      icon: <HiChip className="w-6 h-6 ml-3 mr-2" />,
    },
    {
      path: "/User",
      name: "User Guide",
      icon: <IoBookOutline className="w-6 h-6 ml-3 mr-2" />,
    },
  ];

  return (
    <div className="flex flex-col w-64 bg-black text-white h-screen p-4">
      <div className="flex items-center space-x-2 py-4">
        <div className="h-10 w-10 bg-[#FF9478] rounded-xl"></div>
        <h1 className="text-xl font-bold">Amiazo Chat</h1>
        <button className="ml-auto">
          <IoIosArrowBack className="w-6 h-6 ml-6 text-gray-400" />
        </button>
      </div>
      <p className="font-bold text-xl ml-2 py-2">Menu</p>
      <ul className="mt-4 flex flex-col space-y-6">
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={(navClass) =>
                navClass.isActive
                  ? "flex items-center space-x-2  text-[#FF9478] border-l-4 border-[#FF9478]"
                  : "flex items-center space-x-2 text-gray-400 "
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
            {/* <NavLink className="flex items-center space-x-2 focus:text-[#FF9478] focus:border-l-4 focus:border-[#FF9478]">
              {item.icon}
              {item.name}
            </NavLink> */}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col items-center space-y-24">
        <button className="bg-[#FF9478] flex justify-center text-gray-900 py-3 rounded-2xl w-full font-bold">
          <AiOutlineDollarCircle className="w-6 h-6 opacity-70 mr-1" />
          View Plan
        </button>
        <div className="flex items-center space-x-6">
          <div className="h-12 w-12 bg-[#FF9478] rounded-xl"></div>
          <div>
            <h2 className="text-xl">John Smith</h2>
            <p className="text-xs text-gray-400">8 Dialogues</p>
          </div>
          <TbArrowsMoveVertical className="w-7 h-7 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
