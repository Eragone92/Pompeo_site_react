import React from "react"
import Logo from "../logo/logo"// add logo component
import "./style_header.css" //import style
import "./../adaptive.css"//import style adaptive

const Header = ()=> { // create component Header
    return (
        // symantic tag header
        <header className="header">
            {/* add component logo */}
         <Logo/>
         {/* list with links */}
         <ul className="header__menu">
            {/* link ti home */} 
            <li><a href="/">Home</a></li>
            {/* link to about */}
            <li><a href="/">About</a></li>
            {/* link to shop */}
            <li><a href="/">Shop</a></li>
            {/* link to contacts */}
            <li><a href="/">Contact</a></li>
            {/* link to cart */}
            <li><a href="/">Cart</a></li>
         </ul>
        </header>
    )
}

export default Header //export header