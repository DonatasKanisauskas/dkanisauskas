import { ReactComponent as SpinIcon } from "../assets/spin.svg";

function Spinner({ text = "Loading", dots }) {
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
