import {FaShoppingCart} from 'react-icons/fa'
import { Outlet } from "react-router-dom"

function Header() {


    return (
        <>
            <h1>Cart Page</h1>
            <span className="text-red-300"><FaShoppingCart/></span>
            <Outlet/>
        </>
    )

}

export default Header;

