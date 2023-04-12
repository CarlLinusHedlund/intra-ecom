import { useSelector } from "react-redux";
import Featured from "./components/featured";
import Herobanner from "./components/herobanner";

import "./index.css";

function Home() {
  const { products } = useSelector((state) => state.products);
  console.log("listings: ", products);
  return (
    <div className="inner">
      <div className="container">
        <Herobanner />
        <Featured />
      </div>
    </div>
  );
}

export default Home;
