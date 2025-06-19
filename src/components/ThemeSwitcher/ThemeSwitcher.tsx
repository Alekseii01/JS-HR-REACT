import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { Button } from "../button/Button";

const NIGHT_CSS_ID = "night-theme-css";
const NIGHT_CSS_HREF = "/night.css";

const ThemeSwitcher: React.FC = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const body = document.body;
    let link = document.getElementById(NIGHT_CSS_ID) as HTMLLinkElement | null;

    if (isNight) {
      body.classList.add("night");
      if (!link) {
        link = document.createElement("link");
        link.id = NIGHT_CSS_ID;
        link.rel = "stylesheet";
        link.href = NIGHT_CSS_HREF;
        document.head.appendChild(link);
      }
    } else {
      body.classList.remove("night");
      if (link) {
        link.parentNode?.removeChild(link);
      }
    }
  }, [isNight]);

  return (
    <button
      onClick={() => setIsNight((prev) => !prev)}
      className="theme-switcher"
      aria-label="Сменить тему"
      type="button"
    >
      {isNight ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeSwitcher;