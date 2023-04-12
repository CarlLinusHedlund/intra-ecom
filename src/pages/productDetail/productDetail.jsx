import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../store/modules/products";
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
    <div className="inner">
      <div className="container">
        <div className="product-img">
          <img src="../shopping.jpg" alt="" />
        </div>
        <div className="product-container">
          <div className="product-info">
            <h2 className="text">Category</h2>
            <h1 className="text">Title</h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate aliquam labore eos, pariatur et veritatis aut
              necessitatibus fugiat asperiores expedita possimus, qui unde non
              enim excepturi. Animi amet quod sequi!
            </p>
            <p className="price">NOK 400</p>
          </div>
          <button className="add-to-cart-btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
