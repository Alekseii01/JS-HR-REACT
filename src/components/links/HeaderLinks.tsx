import React from "react";
import { Link } from "react-router-dom";

export interface HeaderLink {
  name: string;
  href: string;
  authOnly?: boolean;
}

export interface HeaderLinksProps {
  links: HeaderLink[];
  user?: any;
}

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