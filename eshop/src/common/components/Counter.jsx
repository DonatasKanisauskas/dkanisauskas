import clsx from "clsx";
import { useState } from "react";
import "./counter.css";

const defaultClasses = "flex justify-left";

function Counter({ className }) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => (prev === "" ? 0 : prev) + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const handleInputChange = (e) => {
    if (e.target.value === "") setCount("");
    else setCount(e.target.valueAsNumber < 1 ? 1 : e.target.valueAsNumber);
  };

  const mergedClass = clsx(defaultClasses, className);
  const mutualStyle = "hover:bg-indigo-50 border focus:outline-none";
  const buttonStyle = "w-8 font-thin bg-white active:bg-indigo-100";
  const inputStyle = "w-20 text-center focus:bg-indigo-100 focus:outline-none";

  return (
    <div className={mergedClass}>
      <button
        className={clsx(mutualStyle, buttonStyle)}
        onClick={handleDecrement}
        disabled={count < 1}
      >
        -
      </button>
      <input
        className={clsx(mutualStyle, inputStyle)}
        value={count}
        onChange={handleInputChange}
        type="number"
      />
      <button
        className={clsx(mutualStyle, buttonStyle)}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
