import React from "react";
import { Link } from "react-router-dom";

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
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