import { useEffect, useState } from "react";
import { ReactComponent as SpinIcon } from "../assets/spin.svg";

function Spinner({ text = "Loading" }) {
  const [dots, setDots] = useState("");

  const displayDots = () => {
    setDots((prev) => (prev.length >= 3 ? "" : `${prev}.`));
  };

  useEffect(() => {
    const interval = setInterval(displayDots, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SpinIcon />
      <div className="mt-1 font-semibold">
        {text}
        {dots}
      </div>
    </div>
  );
}
export default Spinner;
