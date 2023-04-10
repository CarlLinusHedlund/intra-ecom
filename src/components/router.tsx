import { Routes, Route } from "react-router-dom"
import Home from "../pages";
import Cart from "../pages/cart/cart";
import Products from "../pages/products/products";


function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home/ >} />
      <Route path="/products" element={ <Products/ >} />
      <Route path="/cart" element={ < Cart/ > }/>
    </Routes>
  )
}

export default Router;