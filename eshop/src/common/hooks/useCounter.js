import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(1);
  
  const onIncrement = () => {
    setCount((prev) => (prev === "" ? 1 : prev) + 1);
  };
  
  const onDecrement = () => {
    setCount((prev) => (prev <= 1 ? 1 : prev - 1));
  };
  
  const onInputChange = (e) => {
    const val = e.target.value;
    const newVal = val === "" ? "" : parseInt(Math.abs(val));
    setCount(newVal);
  };

  return {
    count, 
    onIncrement, 
    onDecrement, 
    onInputChange
  }
}

export default useCounter;