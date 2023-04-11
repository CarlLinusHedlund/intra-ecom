import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import { fetchProducts } from "./store/modules/listings";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.listings);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
