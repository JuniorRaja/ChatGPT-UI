import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

const ChatBody = ({ chat }) => {
  const InwardMsgStyle =
    "bg-white bg-opacity-40 backdrop-blur dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  //Only for Message Animation
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //For Scroll Animation
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, idx) => {
        return (
          <div
            key={idx}
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]
            ${message.sender === "ai" && InwardMsgStyle}`}
          >
            <pre className="whitespace pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default ChatBody;
