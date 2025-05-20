import React from "react";
import { Link } from "react-router-dom";
import { HeaderLinksProps } from "../types/interface";

const HeaderLinks: React.FC<HeaderLinksProps> = ({ links, user }) => {
  return (
    <>
      {links
        .filter(link => !link.authOnly || user)
        .map((link, index) => (
          <li key={index}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
    </>
  );
};

export default HeaderLinks;