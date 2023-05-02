import React, { useState } from "react";
import SendIcon from "../Assets/send.png";

const ChatInput = ({ sendMessage }) => {
  const [value, setvalue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setvalue("");
  };

  return (
    <div
      className="w-full bg-white bg-opacity-10 max-h rounded-lg px-4 py-4
    overflow-auto relative"
    >
      <textarea
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        rows={1}
        className="border-0 bg-transparent outline-none w-11/12"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />

      <img
        src={SendIcon}
        onClick={handleSubmit}
        alt="SendIcon"
        width={20}
        className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100
        hover:scale-125"
      />
    </div>
  );
};

export default ChatInput;
