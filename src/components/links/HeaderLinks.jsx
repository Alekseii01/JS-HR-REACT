import React from "react";

const HeaderLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;