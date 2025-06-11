import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import MenuPage from '../pages/menuPage/MenuPage';
import LogInPage from '../pages/logInPage/LogInPage';
import Page404 from '../pages/404Page/Page404';
import { User } from 'firebase/auth';
import { Product } from '../components/types/Product';

export interface AppRoutesProps {
  productList: Product[] | null;
  categories: string[];
  addToCart: (product: Product & { quantity?: number }) => void;
  loading: boolean;
  error: string | null;
  user: User | null;
  isAuthLoading: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ productList, categories, addToCart, loading, error, user, isAuthLoading }) => {
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
          !user && !isAuthLoading ? (
            <Navigate to="/login" replace />
          ) : (
                <MenuPage 
                    productList={productList || []} 
                    categories={categories} 
                    addToCart={addToCart} 
                    isLoading={loading} 
                    error={error} 
            />
          )
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
