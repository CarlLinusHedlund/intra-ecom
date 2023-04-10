import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages";
import Cart from "../pages/cart/cart";
import Products from "../pages/products/products";
import NotFound from "./notFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home/ >} />
      <Route path="/products" element={ <Products/ >} />
      <Route path="/cart" element={ < Cart/ > }/>
      <Route path="/not-found" element={ <NotFound/ >} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  )
}

export default Router;