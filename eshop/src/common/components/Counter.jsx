import clsx from "clsx";

const containerStyle = "flex justify-left";
const mutualStyle = "hover:bg-indigo-50 border focus:outline-none bg-white text-black";
const buttonStyle = "w-8 font-thin transform hover:-translate-y-0.5 active:translate-y-0.5 active:bg-indigo-100";
const inputStyle = "w-20 text-center focus:bg-indigo-100 focus:outline-none";

function Counter({ className, count, onIncrement, onDecrement, onInputChange }) {
  return (
    <div className={clsx(containerStyle, className)}>
      <button className={clsx(mutualStyle, buttonStyle)} type="counter" onClick={onDecrement} disabled={count < 1}>
        -
      </button>
      <input className={clsx(mutualStyle, inputStyle)} value={count} onChange={onInputChange} type="number" />
      <button className={clsx(mutualStyle, buttonStyle)} type="counter" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;
