import React from "react";

const ChatBody = () => {
  const InwardMsgStyle =
    "bg-white bg-opacity-40 backdrop-blur dropshadow-md mr-auto";

  return (
    <div className="flex flex-col gap-4">
      {/* Outward Message */}
      <div
        className="border-[#999999] break-words border-2 rounded-xl self-end
      px-3 py-3 max-w-[80%]"
      >
        <pre className="whitespaces pre-wrap">
          <span>Hi ChatGPT !!</span>
        </pre>
      </div>

      {/* Inward Message */}
      <div
        className={`border-[#999999] break-words border-2 rounded-xl self-end
      px-3 py-3 max-w-[80%] ${InwardMsgStyle}`}
      >
        <pre>
          <span>Hi Prasanna !!</span>
        </pre>
      </div>
    </div>
  );
};

export default ChatBody;
