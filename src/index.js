import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/Other/ScrollToTop";
import { FilterProvider, CartProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CartProvider>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer
          closeButton={false}
          autoClose={3000}
          position={"bottom-right"}
        />
        <App />
      </FilterProvider>
    </CartProvider>
  </Router>
);
