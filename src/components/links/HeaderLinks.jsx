import React from "react";
import { Link } from "react-router-dom";

const HeaderLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;