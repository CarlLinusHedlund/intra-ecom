import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

function Header() {
  const { totalProductsInCart } = useSelector((state) => state.cart);
  console.log("TotaleCart", totalProductsInCart);
  return (
    <div className="header-wrapper">
      <div className="header inner">
        <Link to="/" className="logo">
          Intra
        </Link>
        <nav className="nav-wrapper">
          <Link to="/products">Store</Link>
          <Link to="/cart" className="cart-wrapper">
            <img src="../cart.svg" alt="cart" />
            <p className="cart-items">{totalProductsInCart}</p>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
