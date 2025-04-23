import React, { useState } from "react";
import { Button } from "../../components/button/Button.jsx"
import { Tooltip } from "../../components/tooltip/Tooltip.jsx";
import OrderCards from "../../components/OrderCards.jsx";

function Menu({productList, addToCart}) {
  const INITIAL_ROW_COUNT = 6;
  const [rowCount, setRowCount] = useState(INITIAL_ROW_COUNT);
  

  const handleSeeMore = () => {
    setRowCount((prevCount) => prevCount + 6);
  }

  const categories = [...new Set(productList.map(item => item.category))];

  const isButtonVisible = rowCount < productList.length;

  return (
      <section class="main">
          <div class="top-decoration"></div>
          <div class="main-wrapper">
              <div class="main-title">
                <h1>Browse our menu</h1>
                <p>Use our menu to place an order online, or <Tooltip text="+370 390-90-80"><span style={{ color: "#35B8BE" }}>phone</span></Tooltip> our store to place a pickup order. Fast and fresh food.</p>
              </div>
              <div class="main-menu-list">
                <div class="button-wrapper menu">
                  {categories.map(category => (
                  <Button key={category} variant="secondary">
                    {category}
                  </Button>
                  ))}
                </div>
              <div class="menu-wrapper">
                <OrderCards productList={productList.slice(0, rowCount)} addToCart={addToCart}/>
              </div>
                {isButtonVisible && (<div className="button-load"><Button onClick={handleSeeMore} type="regular">See more</Button>
              </div>
                )}
              </div>
          </div>
      </section>
  );
}

export default Menu;