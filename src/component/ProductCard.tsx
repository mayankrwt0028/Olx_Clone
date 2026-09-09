import { CiHeart } from "react-icons/ci";

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
          <CiHeart />
        </button>

      </div>

      <div className="product-details">

        <h3 className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </h3>

        <p className="product-title">
          {product.title}
        </p>
        {/* <p className="product-description">
          {product.description}
        </p> */}

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