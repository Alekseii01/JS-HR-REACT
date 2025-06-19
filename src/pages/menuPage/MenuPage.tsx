import React, { useEffect } from "react";
import { Button } from "../../components/button/Button";
import Tooltip from "../../components/tooltip/Tooltip";
import OrderCards from "../../components/OrderCards";
import LoadingBar from "../../components/loadingBar/LoadingBar";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setItems, setLoading, setError, setSelectedCategory } from "../../store/menuSlice";
import { addItem } from "../../store/cartSlice";
import { fetchProducts } from "../../services/api-products";
import "./menuPage.css";

const INITIAL_ROW_COUNT = 6;
const NEXT_ROW_COUNT = 6;

const MenuPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: productList, loading: isLoading, error, selectedCategory } = useAppSelector((state) => state.menu);

  useEffect(() => {
    dispatch(setLoading(true));
    fetchProducts()
      .then((data) => {
        dispatch(setItems(data));
      })
      .catch((err) => {
        dispatch(setError(err.message || "Ошибка загрузки"));
      });
  }, [dispatch]);

  const [rowCount, setRowCount] = React.useState(INITIAL_ROW_COUNT);

  const categories = ["All", ...Array.from(new Set(productList.map((item) => item.category)))];

  const handleSeeMore = () => setRowCount((prev) => prev + NEXT_ROW_COUNT);

  const handleCategorySelect = (category: string) => {
    dispatch(setSelectedCategory(category === "All" ? null : category));
    setRowCount(INITIAL_ROW_COUNT);
  };

  const handleAddToCart = (product: any) => {
    dispatch(addItem({ ...product, quantity: product.quantity ?? 1 }));
  };

  const filteredProducts =
    !selectedCategory
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
                variant={selectedCategory === category || (!selectedCategory && category === "All") ? "primary" : "secondary"}
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
              addToCart={handleAddToCart}
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