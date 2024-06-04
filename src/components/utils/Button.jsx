import React from "react";

const Button = ({ src, alt, text }) => {
  return (
    <button className="flex items-center justify-center w-full py-2 mb-2 border border-white rounded-full">
      {src != null && (
        <span className="mr-2">
          <img src={src} alt={alt} className="size-6" />
        </span>
      )}
      {text}
    </button>
  );
};

export default Button;
