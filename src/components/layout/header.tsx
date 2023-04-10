import { Link } from "react-router-dom";
import "./header.css"


function Header () {
  return(
    <div className="inner">
      <div className="header">
        <a className="logo" href="/">
          Intra
        </a>
        <nav className="nav-wrapper">
          <Link to="/products">
            Products
          </Link>
          <Link to="/cart" className="cart-wrapper">
            <img src="./cart.svg" alt="cart" />
            <p className="cart-items">10</p>
          </Link>
        </nav>
      </div>
    </div>
    
  )     
}

export default Header;