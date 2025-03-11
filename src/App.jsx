import { useState } from "react";
import "./App.css";
import { FaDeleteLeft } from "react-icons/fa6";

function App() {
  const [input, setInput] = useState("");
  const calculateResult = (button) => {
    if (button === "=") {
      try {
        setInput(eval(input));
      } catch (err) {
        console.log(err);
      }
    } else if (button === "C") {
      setInput("");
    } else {
      setInput(input + button);
    }
  };
  const inputDel = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold font-serif text-gray-700 tracking-[1%] mb-4 border-b border-slate-600 rounded-full px-4">
          Simple Calculator
        </h1>
        <div className="w-[50%] mx-auto border border-sky-600 p-1">
          <div className="bg-slate-400 rounded-md p-3">
            <div className="bg-black text-white rounded-md text-2xl font-bold font-serif p-2 mb-2 shadow-inner shadow-amber-200 flex items-center justify-between">
              <span>{input === "" ? "0" : input}</span>
              <FaDeleteLeft
                className="text-white cursor-pointer"
                onClick={inputDel}
              />
            </div>
            <div className="w-full grid grid-cols-4 gap-3">
              {buttonName.map((button, i) => (
                <button
                  key={i}
                  disabled={button === "=" && input === "" ? true : false}
                  onClick={() => calculateResult(button)}
                  className="px-2 py-4 bg-black text-white rounded-md shadow-lg shadow-sky-400 hover:shadow-inner transition-all duration-300 cursor-pointer text-xl font-semibold font-serif disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const buttonName = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  "C",
  "=",
  "+",
];
export default App;
