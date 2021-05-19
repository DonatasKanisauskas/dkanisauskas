import NavItem from "./components/NavItem";

const NavItems = [
  { text: "PRODUCTS", route: "/products" },
  { text: "VISION", route: "/vision" },
];

function NavBar() {
  return (
    <nav className="bg-gray-300">
      <ul className="flex font-semibold text-lg">
        {NavItems.map((item) => (
          <NavItem key={item.route} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
