import React from "react";
import { Button } from "./button/Button"

const burgers = [
  {
    id: 1,
    name: "Burger Dreams",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 9.2,
    img: "/src/assets/BurgerDreams.png"
  },
  {
    id: 2,
    name: "Burger Waldo",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 10,
    img: "/src/assets/BurgerWaldo.png"
  },
  {
    id: 3,
    name: "Burger Cali",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 8,
    img: "/src/assets/BurgerCali.png"
  },
  {
    id: 4,
    name: "Burger Bacon Buddy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 9.99,
    img: "/src/assets/BurgerBaconBuddy.png"
  },
  {
    id: 5,
    name: "Burger Spicy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 9.2,
    img: "/src/assets/BurgerSpicy.png"
  },
  {
    id: 6,
    name: "Burger Classic",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 8,
    img: "/src/assets/BurgerClassic.png"
  }
];

export function OrderCards() {
  return (
    <div className="menu-cards">
      {burgers.map((burger) => (
        <div key={burger.id} className="menu-item">
          <div className="menu-item-img"><img src={burger.img} alt={burger.name}/></div>
          <div className="menu-item-content">
            <h2>{burger.name}</h2>
            <p>{burger.description}</p>
            <span className="menu-item-price">${burger.price.toFixed(2)} USD</span>
            <div className="menu-item-order">
                <div className="counter"><h3>1</h3></div>
                <><Button className="menu-item-bth">Add to cart</Button></>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}