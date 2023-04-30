import React from "react";
import SendIcon from "../Assets/send.png";

const ChatInput = () => {
  return (
    <div
      className="w-full bg-white bg-opacity-10 max-h rounded-lg px-4 py-4
    overflow-auto relative"
    >
      <textarea
        rows={1}
        className="border-0 bg-transparent outline-none w-11/12"
      />

      <img
        src={SendIcon}
        alt="SendIcon"
        width={20}
        className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100
        hover:scale-125"
      />
    </div>
  );
};

export default ChatInput;
