import clsx from "clsx";
import { Link } from "react-router-dom";

const defaultClasses =
  "grid justify-items-stretch bg-red-50 text-center hover:bg-red-100";

function Button({ className, children, to }) {
  const mergedClass = clsx(defaultClasses, className);
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
