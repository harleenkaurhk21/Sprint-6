import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="loading">Loading Product...</h2>;
  }

  return (
    <div className="product-details">

      <div className="details-card">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="details-image"
        />

        <div className="details-info">

          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <h2>${product.price}</h2>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;