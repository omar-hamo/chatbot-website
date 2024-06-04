import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 px-8 md:px-24 space-y-4 ">
      <IoIosArrowBack className="w-7 h-7 left-64 top-80 opacity-90 cursor-pointer absolute" />

      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex space-x-1 items-center mb-2 ${
            message.sender === "You" ? "justify-end" : "justify-start"
          }`}
        >
          {message.sender === "Bot" && (
            <div className="bg-[#FF9478] p-2 rounded-full">
              Bot<div className="absolute mt-3 text-xs">{message.time}</div>
            </div>
          )}

          <div className="bg-[#2C2D32] p-3 rounded-lg">{message.text}</div>

          {message.sender === "You" && (
            <div className="bg-[#FF9478] p-2 rounded-full">
              You
              {message.sender === "You" && (
                <div className="absolute mt-3 text-xs">{message.time}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
