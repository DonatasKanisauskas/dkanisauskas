import clsx from "clsx";

const defaultClasses = "bg-white border hover:shadow-xl p-2";

function Card({ className, children, iSRounded }) {
  return (
    <div className={clsx(defaultClasses, className, iSRounded && "rounded")}>
      {children}
    </div>
  );
}

export default Card;
