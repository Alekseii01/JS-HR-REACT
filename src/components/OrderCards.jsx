import React, { useState } from "react";
import { Button } from "./button/Button";

const OrderCards = ({ productList, addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (e, mealId) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [mealId]: value,
    }));
  };

  return (
    <div className="menu-cards">
      {productList.map((meal) => (
        <div key={meal.id} className="menu-item">
          <div className="menu-item-img">
            <img src={meal.img} alt={meal.meal} />
          </div>
          <div className="menu-item-content">
            <h2>{meal.meal}</h2>
            <p>
              {meal.category} - {meal.area}
            </p>
            <span className="menu-item-price">
              ${meal.price.toFixed(2)} USD
            </span>
            <div className="menu-item-order">
              <div className="counter">
                <input
                  type="number"
                  min="1"
                  value={quantities[meal.id] || 1}
                  onChange={(e) => handleQuantityChange(e, meal.id)}
                />
              </div>
            <Button
              className="menu-item-bth"
              onClick={() => addToCart({ ...meal, quantity: quantities[meal.id] || 1 })}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};


export default OrderCards;