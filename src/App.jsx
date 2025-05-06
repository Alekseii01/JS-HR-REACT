import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MenuPage from "./pages/menuPage/MenuPage";
import HomePage from "./pages/homePage/homePage";
import Page404 from "./pages/404Page/Page404";
import { mealsApi } from "./components/api/mealsApi";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await mealsApi.getMeals();
      setProductList(products);s

      const uniqueCategories = [...new Set(products.map((item) => item.category))];
      setCategories(uniqueCategories);
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
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/menu"
          element={<MenuPage productList={productList} categories={categories} addToCart={addToCart} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;