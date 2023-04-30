import ChatBody from "./Components/ChatBody";
import ChatInput from "./Components/ChatInput";

function App() {
  return (
    <div
      className="bg-[#1a232e] h-screen py-6 relative sm:px-16 px-12
    text-white overflow-hidden flex flex-col justify-between align-middle"
    >
      {/* Gradient */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      <div className="font-bold text-2xl text-center mb-3">ChatGPT-UI</div>
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center">
        <ChatBody />
      </div>
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
