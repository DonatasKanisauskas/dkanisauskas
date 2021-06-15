import { useEffect, useState } from "react";
import { ReactComponent as SpinIcon } from "../assets/spin.svg";

const dotsIntervalInMs = 300;

function Spinner({ text = "Loading" }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prev) => (prev === "..." ? "" : prev + "."));
    }, dotsIntervalInMs);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SpinIcon />
      <div className="mt-1 font-semibold flex">
        <span>{text}</span>
        <span className="w-3">{dots}</span>
      </div>
    </div>
  );
}
export default Spinner;
