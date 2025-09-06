import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import HeaderLinks from "../links/HeaderLinks";
import Logo from "/public/logo.svg?react";
import LoadingBar from "../loadingBar/LoadingBar";
import { auth } from "../api/firebaseConfig";
import linksConfig from "../__mocks__/linksConfig.js";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useAppSelector } from "../../store/hooks";
import { FaShoppingCart } from "react-icons/fa";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthLoading = useAppSelector((state) => state.auth.loading);
  const cart = useAppSelector((state) => state.cart.items) || [];

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert("Logout successful!");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

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
            <ul>
              <HeaderLinks links={linksConfig.headerLinks} user={user} />
              <li>
                {isAuthLoading ? (
                  <div className="LoadingBar">
                    <LoadingBar variant="loaderDots" />
                  </div>
                ) : user ? (
                  <Link to="/" onClick={handleLogout}>LogOut</Link>
                ) : (
                  <Link to="/login">Sign In</Link>
                )}
              </li>
            </ul>
          </nav>
          
          <div className="cart-block">
            <Link to="/cart">
              <Button type="regular">
                <FaShoppingCart />
              </Button>
            </Link>
            <div className="cart-content">
              <h2>{totalQuantity}</h2>
            </div>
          </div>
        </div>
        <ThemeSwitcher />
        
        <BurgerMenu handleLogout={handleLogout} />
      </div>
    </header>
  );
};

export default Header;