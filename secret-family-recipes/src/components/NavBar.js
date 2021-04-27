import React from "react";



const NavBar = (prop)=>{
    return(
        <nav>
            <input
            placeholder="Search"
            />
            {/* prevent default and pop out the login menu for these anchor tag */}
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
        </nav>
    )
}


export default NavBar;