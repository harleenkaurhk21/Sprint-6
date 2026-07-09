import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cart } = useCart();
  const { isLoggedIn, logout } = useAuth();

  // Total quantity of items in cart
  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ReactShop</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">
            🛒 Cart
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>

            <li>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
