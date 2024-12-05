import { useState } from "react";

function App() {
  const [color, setColor] = useState("#f87171");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2 ">
        <div className="flex justify-center items-center flex-wrap px-3 py-2 bg-white gap-3 shadow-lg rounded-3xl">
          <button
            onClick={() => setColor("#fb923c")}
            className="outline-none px-3 py-2 rounded-full"
            style={{ backgroundColor: "#fb923c" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#16a34a")}
            className="outline-none px-3 py-2 rounded-full"
            style={{ backgroundColor: "#16a34a" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#0284c7")}
            className="outline-none px-3 py-2 rounded-full"
            style={{ backgroundColor: "#0284c7" }}
          >
            Sky
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
