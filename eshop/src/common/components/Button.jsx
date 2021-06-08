import clsx from "clsx";
import { Link } from "react-router-dom";

const defaultClasses = "block text-center text-whitefocus:outline-none";

function Button({ className, children, to, isRounded, onClick }) {
  const mergedClass = clsx(defaultClasses, className, isRounded && "rounded");
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
