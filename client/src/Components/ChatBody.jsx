import React from "react";

const ChatBody = ({ chat }) => {
  const InwardMsgStyle =
    "bg-white bg-opacity-40 backdrop-blur dropshadow-md mr-auto";

  return (
    <div className="flex flex-col gap-4">
      {chat.map((message, idx) => {
        return (
          <div
            key={idx}
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]
            ${message.sender === "ai" && InwardMsgStyle}`}
          >
            <pre className="whitespaces pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      {/* Outward Message */}

      {/* Inward Message */}
      {/* <div
        className={`border-[#999999] break-words border-2 rounded-xl self-end
      px-3 py-3 max-w-[80%] ${InwardMsgStyle}`}
      >
        <pre>
          <span>Hi Prasanna !!</span>
        </pre>
      </div> */}
    </div>
  );
};

export default ChatBody;
