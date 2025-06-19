import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./store/hooks";
import { auth } from "./components/api/firebaseConfig";
import { setUser, setLoading } from "./store/authSlice";
import { resetCart } from "./store/cartSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import MenuPage from "./pages/menuPage/MenuPage";
import LogInPage from "./pages/logInPage/LogInPage";
import OrderPage from "./pages/orderPage/OrderPage";
import Page404 from "./pages/404Page/Page404";
import ProtectedRoute from "./routes/ProtectedRoute";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
      dispatch(setLoading(false));
      if (!user) {
        dispatch(resetCart());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/menu" element={<ProtectedRoute element={<MenuPage />} />} />
        <Route path="/cart" element={<ProtectedRoute element={<OrderPage />} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;