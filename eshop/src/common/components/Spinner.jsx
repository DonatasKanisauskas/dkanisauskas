import { ReactComponent as SpinIcon } from "../assets/spin.svg";

function Spinner({ text = "Loading" }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SpinIcon />
      <div className="mt-1 font-semibold">{text}</div>
    </div>
  );
}
export default Spinner;
