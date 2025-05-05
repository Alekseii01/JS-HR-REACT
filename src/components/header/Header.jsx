import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button.jsx";
import HeaderLinks from "../links/HeaderLinks.jsx";
import Logo from "/public/logo.svg?react";

import linksConfig from "../__mocks__/linksConfig.js";

const Header = ({ cart }) => {
  const calculateTotalItems = (cart) => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

  const totalQuantity = calculateTotalItems(cart);

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="nav-wrapper">
          <nav>
            <HeaderLinks links={linksConfig.headerLinks} />
          </nav>
          <div className="cart-block">
            <Link to="/cart">
              <Button type="regular">
                <i className="fa-solid fa-cart-shopping"></i>
              </Button>
            </Link>
            <div className="cart-content">
              <h2>{totalQuantity}</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;