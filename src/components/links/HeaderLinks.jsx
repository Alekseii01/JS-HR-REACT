import React, { Component } from "react";

export class HeaderLinks extends Component {
  render() {
    const { links } = this.props;

    return (
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default HeaderLinks;