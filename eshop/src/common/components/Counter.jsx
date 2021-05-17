import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const inputChangeCount = (e) => {
    if (e.target.value === "") setCount(0);
    else setCount(parseInt(e.target.value));
  };

  return (
    <div className="p-5 flex justify-left">
      <button
        className="w-8 font-thin hover:bg-indigo-50 border bg-white"
        onClick={decreaseCount}
      >
        -
      </button>
      <input
        className="w-20 text-center hover:bg-indigo-50 border"
        value={count}
        onChange={inputChangeCount}
        type="number"
      />
      <button
        className="w-8 font-thin hover:bg-indigo-50 border bg-white"
        onClick={increaseCount}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
