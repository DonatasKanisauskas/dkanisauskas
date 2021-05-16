import NavItem from "./components/NavItem";

const NavItems = [
    {text: 'PRODUCTS', route: '/', key: 0},
    {text: 'VISION', route: '/vision', key: 1},
];

function NavBar(){
    return (
        <nav className="bg-gray-300">
            <ul className="flex font-semibold text-lg">
                {NavItems.map((item) => (
                    <NavItem {...item} />
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;