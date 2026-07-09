import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert("🎉 Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <p>
          <strong>Total Items:</strong> {totalItems}
        </p>

        <p>
          <strong>Total Amount:</strong> $
          {totalPrice.toFixed(2)}
        </p>

        <button
          className="checkout-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;