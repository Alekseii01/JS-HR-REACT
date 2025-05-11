import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MenuPage from "./pages/menuPage/MenuPage";
import HomePage from "./pages/homePage/homePage";
import Page404 from "./pages/404Page/Page404";
import { mealsApi } from "./components/api/mealsApi";
import useFetch from "./components/hooks/useFetch";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});

const { data: productList, loading, error } = useFetch(mealsApi.getMeals);

  useEffect(() => {
    if (productList) {
      const uniqueCategories = [...new Set(productList.map((item) => item.category))];
      setCategories(uniqueCategories);
    }
  }, [productList]);

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
          element={<MenuPage productList={productList} categories={categories} addToCart={addToCart} isLoading={loading} error={error} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;