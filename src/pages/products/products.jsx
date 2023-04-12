import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

function Products() {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="inner">
      <div className="product-wrapper">
        {products.map((product) => (
          <div key={product.id} className="el-wrapper">
            <div className="box-up">
              <img className="img" src={product.imageUrl} alt={product.title} />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{product.title}</span>
                  <span className="p-company">{product.tags}</span>
                </div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <Link to={"/product/" + product.id} className="cart">
                <span
                  className={`${
                    product.price === product.discountedPrice
                      ? "price"
                      : "discounted-price"
                  }`}
                >
                  NOK{" "}
                  {product.price === product.discountedPrice
                    ? product.price
                    : product.discountedPrice}
                </span>

                <span className="add-to-cart">
                  <p className="txt">Read More</p>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
