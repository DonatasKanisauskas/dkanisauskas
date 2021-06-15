import clsx from "clsx";
import Button from "./Button";
import "./counter.css";

const containerStyle = "flex justify-left";
const mutualStyle = "hover:bg-indigo-50 border focus:outline-none";
const buttonStyle =
  "w-8 font-thin bg-white transform hover:-translate-y-0.5 active:translate-y-0.5";
const inputStyle = "w-20 text-center focus:bg-indigo-100 focus:outline-none";

function Counter({
  className,
  count,
  onIncrement,
  onDecrement,
  onInputChange,
}) {
  return (
    <div className={clsx(containerStyle, className)}>
      <Button
        className={clsx(mutualStyle, buttonStyle)}
        onClick={onDecrement}
        disabled={count < 1}
      >
        -
      </Button>
      <input
        className={clsx(mutualStyle, inputStyle)}
        value={count}
        onChange={onInputChange}
        type="number"
      />
      <Button className={clsx(mutualStyle, buttonStyle)} onClick={onIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
