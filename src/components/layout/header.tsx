import { Link } from "react-router-dom";

function Header () {
  return(
    <div className="">
      <p>Intra</p>
      <nav>
        <Link to="#">
          Home
        </Link>
        <Link to="#">
          Products
        </Link>
      </nav>
    </div>
  )     
}

export default Header;