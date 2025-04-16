import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./pages/menuPage/MenuPage";
import { mealsApi } from "./components/api/mealsApi";

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await mealsApi.getMeals();
      setProductList(products);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product }]);
  };

  useEffect(() => { // TODO: Only for debugging, remove later
    console.log("Updated Cart:", cart);
  }, [cart]);

  return (
    <>
      <Header cart={cart} />
      <Menu productList={productList} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;