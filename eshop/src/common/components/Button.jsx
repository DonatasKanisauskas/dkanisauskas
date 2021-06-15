import clsx from "clsx";
import { Link } from "react-router-dom";

const typeClassMap = {
  default: "bg-gray-500 hover:bg-gray-600 text-white",
  primary: "bg-blue-400 hover:bg-blue-500 text-white",
  counter: "bg-white text-black",
};

const initialClasses = "block text-center text-semibold px-2 py-1 focus:outline-none";
const disabledClasses = "bg-gray-300 text-gray-400 cursor-default";

function Button({ type = "default", className, children, to, isRounded, onClick, disabled }) {
  const mergedClass = clsx(initialClasses, className, isRounded && "rounded", disabled ? disabledClasses : typeClassMap[type]);
  if (to) {
    return (
      <Link className={mergedClass} to={to} onClick={onClick} disabled={disabled}>
        {children}
      </Link>
    );
  }
  return (
    <button className={mergedClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
