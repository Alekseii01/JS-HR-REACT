import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import HeaderLinks from "../links/HeaderLinks";
import Logo from "/public/logo.svg?react";
import LoadingBar from "../loadingBar/LoadingBar";
import { auth } from "../api/firebaseConfig";
import linksConfig from "../__mocks__/linksConfig.js";
import { User } from "firebase/auth";
import { CartItem } from "../types/Product";

export interface HeaderLink {
  name: string;
  href: string;
  authOnly?: boolean;
}

export interface HeaderLinksProps {
  links: HeaderLink[];
  user?: any;
}

export interface HeaderProps {
  cart: Record<string, CartItem>;
  user: User | null;
  isAuthLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ cart, user, isAuthLoading }) => {
  const calculateTotalItems = (cart: Record<string, CartItem>) => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

  const totalQuantity = calculateTotalItems(cart);

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
                  <Link to="/login">LogIn</Link>
                )}
              </li>
            </ul>
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