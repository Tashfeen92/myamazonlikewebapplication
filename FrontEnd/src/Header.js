import React from 'react'
import './Header.css'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import { useStatevalue } from './StateProvider';
export default function Header() {
  const [{basket}, dispatch]=useStatevalue();
  console.log("hello from header"+basket)
  console.log(dispatch)
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt=""
          />
        </Link>
        <div className="header_search">
          <input className="header_serachinput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to="/login" >
            <div className="header_option">
              <span className="header_optionone">hello guest </span>
              <span className="header_optiontwo">Sign in</span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_optionone">Return</span>
            <span className="header_optiontwo">Order</span>
          </div>
          <div className="header_option">
            <span className="header_optionone">Your</span>
            <span className="header_optiontwo">Prim</span>
          </div>
          <Link to={"/Checkout"}>
            <div className="header_optionbasket">
              <ShoppingBasketIcon />
              <span className="header_optiontwo header_backetcount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
