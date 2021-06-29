import CartNavmItem from "./components/CartNavItem";
import NavItem from "./components/NavItem";

const NavItems = [
  { content: "PRODUCTS", route: "/" },
  { content: "VISION", route: "/vision" },
];

function NavBar() {
  return (
    <nav className="bg-gray-400">
      <ul className="flex font-semibold text-lg">
        {NavItems.map((item) => (
          <NavItem key={item.route} {...item} />
        ))}
        <CartNavmItem />
      </ul>
    </nav>
  );
}

export default NavBar;
