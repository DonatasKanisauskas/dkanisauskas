import { Link } from "react-router-dom";

function NavItem({ text, route }) {
  return (
    <li className="p-2 hover:text-blue-600">
      <Link to={route}>{text}</Link>
    </li>
  );
}

export default NavItem;
