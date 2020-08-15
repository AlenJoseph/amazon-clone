import React from 'react'
import "../assets/css/Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
function Header() {
    return <nav className="header">
        {/* logo on the lefy -> img*/}
        <Link to="/">
        <img className= "header__logo "src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
        </Link>
       
        {/* Search Box */}
        <div className="header__search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>
        {/* 3 Links */}
        {/* Basket icon with number */}

    </nav>
           
        
    
}

export default Header;
