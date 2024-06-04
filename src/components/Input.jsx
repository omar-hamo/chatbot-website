import React, { useState } from "react";
import { FiTrash, FiSend } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { TbArrowsMoveVertical } from "react-icons/tb";

const Input = ({ addMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, "You");
      setInputValue("");
    }
  };
  return (
    <div className=" p-5">
      <div class=" flex flex-col h-auto w-full md:w-full mb-3 relative rounded-2xl bg-gradient-to-r from-blue-500 from-10% via-pink-500 via-90% to-orange-500 to-99% p-0.5 ">
        <input
          type="text"
          placeholder="Enter your question, goal or next big project ..."
          className="flex bg-[#2C2D32] w-full text-white  p-3 rounded-2xl focus:outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex top-2 right-2 items-end space-x-2 ml-4 absolute">
          <button className="p-2 ">
            <FiTrash className="w-5 h-5" />
          </button>
          <button className="p-2 ">
            <FaRegCopy className="w-5 h-5" />
          </button>
          <button
            className="p-2 bg-[#FF9478] rounded-3xl"
            onClick={handleSendMessage}
          >
            <FiSend className="w-5 h-5 " />
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex items-center space-x-1 px-3 bg-[#2C2D32] rounded-lg">
          <AiOutlineStop className="w-6 h-6" />
          <select className="bg-[#2C2D32] text-white p-2 rounded-lg focus:outline-none appearance-none">
            <option>No Tool</option>
            <option>Session 1</option>
            <option>Session 2</option>
          </select>
          <TbArrowsMoveVertical className="w-6 h-6" />
        </div>
        <div className="flex items-center space-x-3 ml-4 rounded-lg px-4 py-2 bg-[#2C2D32]">
          <span>Credit Remaining</span>
          <div className="bg-gray-700 text-white text-sm px-2 rounded-xl">
            300
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
