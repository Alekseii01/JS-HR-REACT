import React from "react";
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
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="nav-wrapper">
          <nav>
            <HeaderLinks links={linksConfig.headerLinks} />
          </nav>
          <div className="cart-block">
            <Button type="regular">
              <i className="fa-solid fa-cart-shopping"></i>
            </Button>
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