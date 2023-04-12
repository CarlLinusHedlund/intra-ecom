import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import { fetchProducts } from "./store/modules/products";
import Loader from "./components/loader";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { isLoading } = useSelector((state) => state.loader);

  return (
    <BrowserRouter>
      <Layout />
      {isLoading && <Loader />}
    </BrowserRouter>
  );
}

export default App;
