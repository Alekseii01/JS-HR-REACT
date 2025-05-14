import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import MenuPage from '../pages/menuPage/MenuPage';
import LogInPage from '../pages/loginPage/LogInPage';
import Page404 from '../pages/404Page/Page404';

const AppRoutes = ({ productList, categories, addToCart, loading, error, user, isAuthLoading }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={<LogInPage user={user} isAuthLoading={isAuthLoading} />}
      />
      <Route
        path="/menu"
        element={
                <MenuPage 
                    productList={productList} 
                    categories={categories} 
                    addToCart={addToCart} 
                    isLoading={loading} 
                    error={error} 
                    />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
