import type { Product } from "../storage/product";

import ProductCard from "./ProductCard";

import "./ProductList.css";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="section-header">
          <h2>Fresh recommendations</h2>
        </div>

        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
