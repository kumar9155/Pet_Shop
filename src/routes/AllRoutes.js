import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProductList from "../pages/Products/ProductsList";

import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CartPage from "../pages/Cart/CartPage";
import ProtectedRoutes from "./ProtectedRoutes";
import OrderPage from "../pages/Order/OrderPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
