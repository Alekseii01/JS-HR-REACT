import React, { Component } from "react";

export class FooterLinks extends Component {
  render() {
    const { title, links } = this.props;

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
}

export default FooterLinks;