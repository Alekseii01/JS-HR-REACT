import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./pages/menuPage/MenuPage";
import { mealsApi } from "./components/api/mealsApi";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await mealsApi.getMeals();
      setProductList(products);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: (prevCart[product.id]?.quantity || 0) + (product.quantity || 1),
      },
    }));
  };

  useEffect(() => {
    console.log("Updated Cart:", cart); // TODO: Only for debugging, remove later
  }, [cart]);

  return (
    <>
      <Header cart={cart} />
      <Menu productList={productList} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default App;