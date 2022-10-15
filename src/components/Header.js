import {FaShoppingCart} from 'react-icons/fa'
import {Link, Outlet} from "react-router-dom"
import {useEffect} from "react";

function Header() {


    return (
        <div>
            <Outlet/>
        </div>
    )

}

export default Header;

