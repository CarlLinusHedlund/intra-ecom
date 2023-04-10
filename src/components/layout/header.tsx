import { Link } from "react-router-dom";
import { StyledHeader } from "./header.styles";


function Header () {
  return(
    <StyledHeader>
      <p>Intra</p>
      <nav>
        <Link to="#">
          Home
        </Link>
        <Link to="#">
          Products
        </Link>
      </nav>
    </StyledHeader>
  )     
}

export default Header;