import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { auth } from "./components/api/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import useFetch from "./components/hooks/useFetch";
import { Product, CartItem } from "./components/types/interface";

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const {
    data: productList,
    loading,
    error,
  } = useFetch<Product[]>("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");

  useEffect(() => {
    if (Array.isArray(productList)) {
      const uniqueCategories = [
        ...new Set(productList.map((item: Product) => item.category)),
      ];
      setCategories(uniqueCategories as string[]);
    }
  }, [productList]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: (prevCart[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  useEffect(() => {
    console.log("Updated Cart:", cart); // TODO: Only for debugging, remove later
  }, [cart]);

  return (
    <Router>
      <Header cart={cart} user={user} isAuthLoading={isAuthLoading} />
      <AppRoutes
        productList={productList}
        categories={categories}
        addToCart={addToCart}
        loading={loading}
        error={error}
        user={user}
        isAuthLoading={isAuthLoading}
      />
      <Footer />
    </Router>
  );
};

export default App;