import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => (prev === "" ? 0 : prev) + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    if (e.target.value === "") setCount("");
    else setCount(e.target.valueAsNumber);
  };

  return (
    <div className="p-5 flex justify-left">
      <button
        className="w-8 font-thin hover:bg-indigo-50 border bg-white"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="w-20 text-center hover:bg-indigo-50 border"
        value={count}
        onChange={handleInputChange}
        type="number"
      />
      <button
        className="w-8 font-thin hover:bg-indigo-50 border bg-white"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
