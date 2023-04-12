import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/modules/cartSlice";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { productsInCart } = useSelector((state) => state.cart);
  let subtotal = productsInCart.reduce(
    (acc, product) => acc + product.price,
    0
  );
  let total = (parseFloat(subtotal) + 45).toFixed(2);
  return (
    <div className="inner">
      <div className="cart-container">
        {productsInCart.map((product) => (
          <div key={product.id} className="item-wrapper">
            <div className="cart-img">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className="info-container">
              <div className="info">
                <p>{product.title}</p>
                <p>Qty: 1</p>
              </div>
              <div className="price">
                <p>
                  NOK
                  {product.price === product.discountedPrice
                    ? product.price
                    : product.discountedPrice}
                </p>
              </div>
            </div>
            <span
              onClick={() => dispatch(removeProduct(product.id))}
              className="remove-btn"
            >
              Remove
            </span>
          </div>
        ))}
        <div className="price-container">
          <div className="subtotal-and-shipping">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>NOK {subtotal}</p>
            </div>
            <div className="shipping">
              <p>Shipping</p>
              <p>NOK 45</p>
            </div>
          </div>
          <div className="total-wrapper">
            <p>Total</p>
            <p>NOK {productsInCart === false ? 0 : total}</p>
          </div>
        </div>
        <button className="submit-btn">Place Order</button>
      </div>
    </div>
  );
}

export default Cart;
