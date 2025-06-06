import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import Tooltip from "../../components/tooltip/Tooltip";
import OrderCards from "../../components/OrderCards";
import LoadingBar from "../../components/loadingBar/LoadingBar";
import { Product } from "../../components/types/Product";
import "./menuPage.css";

export interface MenuPageProps {
  productList: Product[];
  categories: string[];
  addToCart: (product: Product & { quantity: number }) => void;
  isLoading: boolean;
  error?: string | null;
}

const MenuPage: React.FC<MenuPageProps> = ({ productList, categories, addToCart, isLoading, error, }) => {
  const INITIAL_CATEGORY = "All";
  const INITIAL_ROW_COUNT = 6;
  const NEXT_ROW_COUNT = 6;

  const [rowCount, setRowCount] = useState(INITIAL_ROW_COUNT);
  const [selectedCategory, setSelectedCategory] = useState(INITIAL_CATEGORY);

  const handleSeeMore = () => {
    setRowCount((prevRowCount) => prevRowCount + NEXT_ROW_COUNT);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setRowCount(INITIAL_ROW_COUNT);
  };

  const filteredProducts =
    selectedCategory === INITIAL_CATEGORY
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  const isButtonVisible = filteredProducts && rowCount < filteredProducts.length;

  return (
    <section className="main">
      <div className="top-decoration"></div>
      <div className="menu-wrapper">
        <div className="menu-title">
          <h1>Browse our menu</h1>
          <p>
            Use our menu to place an order online, or{" "}
            <Tooltip text="+370 390-90-80">
              <span style={{ color: "#35B8BE" }}>phone</span>
            </Tooltip>{" "}
            our store to place a pickup order. Fast and fresh food.
          </p>
        </div>
        <div className="menu-list">
          <div className="button-wrapper menu">
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
          <div className="menu-wrapper">
            <OrderCards
              productList={filteredProducts?.slice(0, rowCount) || []}
              addToCart={addToCart}
            />
          </div>
          {isButtonVisible && (
            <div className="button-load">
              <Button onClick={handleSeeMore} type="button">
                See more
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;