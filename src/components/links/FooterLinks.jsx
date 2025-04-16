import React from "react";

function FooterLinks({ title, links }) {
  return (
    <ul>
      <h3>{title}</h3>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;

