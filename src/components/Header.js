import React from 'react'
import "../assets/css/Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
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
         <div className="header__nav">
            <Link to ="/login" className="header__link">
             <div className="header__option">
                 <span className="header__optionLineOne">Hello Alen</span>
                 <span className="header__optionLineTwo"> Sign IN</span>
             </div>
            </Link>
            <Link to ="/" className="header__link">
             <div className="header__option">
                 <span  className="header__optionLineOne">Returns</span>
                 <span  className="header__optionLineTwo"> Orders</span>
             </div>
            </Link>
            <Link to ="/" className="header__link">
             <div className="header__option">
                 <span  className="header__optionLineOne">Your</span>
                 <span  className="header__optionLineTwo"> Prime</span>
             </div>
            </Link>
            <Link to ="/" className="header__link" >
             <div className="header__optionBasket">
                 <ShoppingBasketIcon/>
                 <span className="header__optionCount">0</span>
             </div>
            </Link>
        

         </div>
        {/* Basket icon with number */}

    </nav>
           
        
    
}

export default Header;
