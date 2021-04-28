import React from "react";
import { Link } from "react-router-dom";


const Nav = (prop)=>{
    return(
        <nav>
            <input
            placeholder="Search"
            />
            {/* prevent default and pop out the login menu for these anchor tag */}
            <Link to="/user">Login</Link>

            <a href="#">Sign Up</a>
        </nav>
    )
}


export default Nav;