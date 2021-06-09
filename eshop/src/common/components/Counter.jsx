import clsx from "clsx";
import { useState } from "react";
import Button from "./Button";
import "./counter.css";

const containerStyle = "flex justify-left";
const mutualStyle = "hover:bg-indigo-50 border focus:outline-none";
const buttonStyle =
  "w-8 font-thin bg-white transform hover:-translate-y-0.5 active:translate-y-0.5";
const inputStyle = "w-20 text-center focus:bg-indigo-100 focus:outline-none";

function Counter({ className }) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => (prev === "" ? 1 : prev) + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    const newVal = val === "" ? "" : parseInt(Math.abs(val));
    setCount(newVal);
  };

  return (
    <div className={clsx(containerStyle, className)}>
      <Button
        className={clsx(mutualStyle, buttonStyle)}
        onClick={handleDecrement}
        disabled={count < 1}
      >
        -
      </Button>
      <input
        className={clsx(mutualStyle, inputStyle)}
        value={count}
        onChange={handleInputChange}
        type="number"
      />
      <Button
        className={clsx(mutualStyle, buttonStyle)}
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
