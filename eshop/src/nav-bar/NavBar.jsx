import { Link } from "react-router-dom";

function NavBar(){
    return <nav className="bg-gray-300">
        <ul className="flex">
            <li className="p-2">
                <Link to="/">PRODUCTS</Link>
            </li>
            <li className="p-2">
                <Link to="/vision">VISION</Link>
            </li>
        </ul>
    </nav>
}

export default NavBar;