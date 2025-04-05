import React from "react";
import { Button } from "./button/Button";

import burgers from "./__mocks__/burgersData.js";

export function OrderCards() {
  return (
    <div className="menu-cards">
      {burgers.map((burger) => (
        <div key={burger.id} className="menu-item">
          <div className="menu-item-img">
            <img src={burger.img} alt={burger.name} />
          </div>
          <div className="menu-item-content">
            <h2>{burger.name}</h2>
            <p>{burger.description}</p>
            <span className="menu-item-price">${burger.price.toFixed(2)} USD</span>
            <div className="menu-item-order">
              <div className="counter">
                <h3>1</h3>
              </div>
              <Button className="menu-item-bth">Add to cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}