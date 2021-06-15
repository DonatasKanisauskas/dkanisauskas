import clsx from "clsx";
import { Link } from "react-router-dom";

const typeClassMap = {
  default: "text-white block ",
  primary: "text-white block bg-blue-400",
};
const initialClasses =
  "text-center focus:outline-none text-semibold bg-gray-500 hover:bg-gray-600 m-2 px-2 py-1 focus:outline-none";

function Button({
  type = "default",
  className,
  children,
  to,
  isRounded,
  onClick,
}) {
  const mergedClass = clsx(
    initialClasses,
    typeClassMap[type],
    className,
    isRounded && "rounded"
  );
  if (to) {
    return (
      <Link className={mergedClass} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={mergedClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
