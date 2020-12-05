import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';;

function Header() {
    const [{ basket }] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img 
                className="header__logo"
                src="https://rb.gy/l9jnlk"
                alt="logo"
                />
            </Link>
            <div className="header__search">
                <input
                type="text"
                className="header__seachInput"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__options">
                    <span className="header__optionsLineOne">Hello, Tridev</span>
                    <span className="header__optionsLineTwo">Login</span>
                </Link>
                <Link to="/" className="header__options">
                    <span className="header__optionsLineOne">Returns</span>
                    <span className="header__optionsLineTwo">& Orders</span>
                </Link>
                <Link to="/" className="header__options">
                    <span className="header__optionsLineOne">Your</span>
                    <span className="header__optionsLineTwo">Prime</span>
                </Link>
                <Link to="/checkout" className="header__optionsBasket">
                    <ShoppingBasketIcon className="header__optionsLineOne" />
                    <span className="header__optionsLineTwo BasketCount">{ basket?.length }</span>
                </Link>
            </div>
        </div>
    )
}

export default Header;