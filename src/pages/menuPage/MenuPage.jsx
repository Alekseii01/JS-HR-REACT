import React, { useState } from "react";
import { Button } from "../../components/button/Button.jsx";
import Tooltip from "../../components/tooltip/Tooltip.jsx";
import OrderCards from "../../components/OrderCards.jsx";
import LoadingBar from "../../components/loadingBar/LoadingBar.jsx";
import "./menuPage.css";

const MenuPage = ({ productList, categories, addToCart, isLoading, error }) => {
  const INITIAL_CATEGORY = "All";
  const INITIAL_ROW_COUNT = 6;
  const NEXT_ROW_COUNT = 6;

  const [rowCount, setRowCount] = useState(INITIAL_ROW_COUNT);
  const [selectedCategory, setSelectedCategory] = useState(INITIAL_CATEGORY);

  const handleSeeMore = () => {
    setRowCount((prevRowCount) => prevRowCount + NEXT_ROW_COUNT);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setRowCount(INITIAL_ROW_COUNT);
  };

  const filteredProducts =
    selectedCategory === INITIAL_CATEGORY
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  const isButtonVisible = filteredProducts && rowCount < filteredProducts.length;

  return (
      <section class="main">
        <div class="top-decoration"></div>
        <div class="menu-wrapper">
            <div class="menu-title">
              <h1>Browse our menu</h1>
              <p>Use our menu to place an order online, or <Tooltip text="+370 390-90-80"><span style={{ color: "#35B8BE" }}>phone</span></Tooltip> our store to place a pickup order. Fast and fresh food.</p>
            </div>
            <div class="menu-list">
              <div class="button-wrapper menu">
                    {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "secondary"}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Button>
              ))}
              </div>
              {isLoading && (
                <div className="menu-cards-loading">
                  <LoadingBar />
                </div>
              )}
              {error && (
                <div className="menu-cards-error">
                  <p>{error}</p>
                </div>
              )}
            <div class="menu-wrapper">
              <OrderCards
                productList={filteredProducts?.slice(0, rowCount) || []}
                addToCart={addToCart}
              />
            </div>
              {isButtonVisible && (<div className="button-load"><Button onClick={handleSeeMore} type="regular">See more</Button>
            </div>
          )}
          </div>
        </div>
      </section>
    );
  };

export default MenuPage;