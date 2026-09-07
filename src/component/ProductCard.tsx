import { FaHeart } from "react-icons/fa";

import type { Product } from "../storage/product";

import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">

      <div className="product-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <button
          className="wishlist-btn"
          type="button"
          aria-label="Add to wishlist"
        >
          <FaHeart />
        </button>
      </div>


      <div className="product-details">
        {/* Price */}
        <h3 className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </h3>

      
        <p className="product-title">
          {product.title}
        </p>

       
        <div className="product-footer">
          <span className="product-location">
            {product.location}
          </span>

          <span className="product-date">
            {product.date}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;