import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
  return (
    <ul>
      <h3>{title}</h3>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;