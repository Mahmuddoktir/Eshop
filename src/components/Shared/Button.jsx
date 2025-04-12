import React from "react";

const Button = ({
  text,
  bgColor,
  textColor = () => {},
  handleOrderPopup = () => {},
}) => {
  return (
    <button
      onClick={() => handleOrderPopup()}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105
  duration-300 px-8 py-2 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
