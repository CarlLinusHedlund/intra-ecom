import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../store/modules/products";
import { addSingleProductToCart } from "../../store/modules/cartSlice";

import "./productDetail.css";

function ProductDetail() {
  let id = useParams();
  console.log("id, ", id);
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchSingleProduct(id.id));
  }, []);

  return (
    <>
      {singleProduct && (
        <div className="inner">
          <div className="container">
            <div className="product-img">
              <img src={singleProduct.imageUrl} alt="" />
            </div>
            <div className="product-container">
              <div className="product-info">
                <div className="text tags">
                  {singleProduct.tags.map((tag) =>
                    tag
                      .split(",")
                      .map((t) => <span key={t.trim()}>{t.trim()}</span>)
                  )}
                </div>
                {/* <h2 className="text">{singleProduct.tags}</h2> */}
                <h1 className="text">{singleProduct.title}</h1>
                <p className="text">{singleProduct.description}</p>
                <p className="price">
                  NOK{" "}
                  {singleProduct.price === singleProduct.discountedPrice
                    ? singleProduct.price
                    : singleProduct.discountedPrice}
                </p>
              </div>
              <button
                onClick={() => dispatch(addSingleProductToCart(singleProduct))}
                className="add-to-cart-btn"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
