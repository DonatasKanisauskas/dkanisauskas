import { Link } from "react-router-dom";

function NavBar(){
    return <nav className="bg-gray-300">
        <ul className="flex font-semibold text-lg">
            <li className="p-2 hover:text-blue-600">
                <Link to="/">PRODUCTS</Link>
            </li>
            <li className="p-2 hover:text-blue-600">
                <Link to="/vision">VISION</Link>
            </li>
        </ul>
    </nav>
}

export default NavBar;