import clsx from "clsx";
import { Link } from "react-router-dom";

const defaultClasses =
  "bg-gray-500 hover:bg-gray-600 m-2 block text-center text-white p-1 px-2 focus:outline-none";

function Button({ className, children, to, isRounded }) {
  const mergedClass = clsx(defaultClasses, className, isRounded && "rounded");
  if (to) {
    return (
      <Link className={mergedClass} to={to}>
        {children}
      </Link>
    );
  }
  return <button className={mergedClass}>{children}</button>;
}

export default Button;
