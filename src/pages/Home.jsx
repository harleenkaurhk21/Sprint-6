import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img src="hero.jpg" alt="Hero" className="hero-image" />

      <div className="hero">
        <h1>Welcome to ReactShop 🛍️</h1>

        <p>
          Discover the latest products at the best prices.
          Browse our collection and add your favorite items
          to your shopping cart.
        </p>

        <Link to="/shop">
          <button className="shop-btn">Start Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
