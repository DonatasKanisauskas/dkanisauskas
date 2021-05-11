import NavItem from "./components/NavItem";

function NavBar(){
    return <nav className="bg-gray-300">
        <ul className="flex font-semibold text-lg">
            <NavItem text="PRODUCTS" route="/" />
            <NavItem text="VISION" route="/vision"/>
        </ul>
    </nav>
}

export default NavBar;