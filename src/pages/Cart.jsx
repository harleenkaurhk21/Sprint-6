import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <h2>Your cart is empty 🛒</h2>

        <Link to="/shop">
          <button className="shop-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="cart-image"
            />

            <div className="cart-info">
              <h3>{item.title}</h3>

              <p>Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Total: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>
          Grand Total: ${totalPrice.toFixed(2)}
        </h2>

        <Link to="/checkout">
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;