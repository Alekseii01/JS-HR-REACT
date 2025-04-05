import React from "react";
import { Button } from "../button/Button.jsx";
import HeaderLinks from "../links/HeaderLinks.jsx";

import linksConfig from "../__mocks__/linksConfig.js";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <a href="/"><img src="../../public/logo.svg" alt="Logo" /></a>
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
              <h2>0</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;