import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart/cart";
import Products from "../pages/products/products";
import NotFound from "./notFound";
import ProductDetail from "../pages/specificProduct/specificProduct";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
