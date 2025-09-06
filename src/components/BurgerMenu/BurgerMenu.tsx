import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderLinks from "../links/HeaderLinks";
import linksConfig from "../__mocks__/linksConfig.js";
import LoadingBar from "../loadingBar/LoadingBar";
import { useAppSelector } from "../../store/hooks";
import './burgerMenu.css'

interface BurgerMenuProps {
  handleLogout: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const user = useAppSelector((state) => state.auth.user);
  const isAuthLoading = useAppSelector((state) => state.auth.loading);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (target && target.closest("a")) setIsOpen(false);
  };

  return (
    <div className="burger-menu">
      <button
        className={`burger-icon ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="burger-portal">
          <div className="burger-overlay" onClick={handleOverlayClick}>
            <div
              className="burger-nav"
              ref={menuRef}
              role="menu"
              onClick={handleNavClick}
            >
              <div className="burger-nav-top">
                <button
                  className={`burger-icon ${isOpen ? "active" : ""}`}
                  onClick={() => setIsOpen((v) => !v)}
                  aria-expanded={isOpen}
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              <ul>
                <HeaderLinks links={linksConfig.headerLinks} user={user} />
                <li>
                  {isAuthLoading ? (
                    <div className="LoadingBar">
                      <LoadingBar variant="loaderDots" />
                    </div>
                  ) : user ? (
                    <Link
                      to="/"
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                    >
                      LogOut
                    </Link>
                  ) : (
                    <Link to="/login">Sign In</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
