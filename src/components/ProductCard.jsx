import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p className="product-price">
        <strong>${product.price}</strong>
      </p>

      <p>⭐ {product.rating}</p>

      <Link to={`/product/${product.id}`}>
        <button className="details-btn">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;