import { categories } from "../storage/Categorie";

import "./Categories.css";

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
}

function Categories({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) {
  return (
    <section className="categories-section">
      <div className="categories-container">

        <div className="section-header">
          <h2>Popular Categories</h2>

          <button
            type="button"
            onClick={() => setSelectedCategory("")}
          >
            View All
          </button>
        </div>

        <div className="categories-grid">

          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={`category-card ${
                selectedCategory === category.slug
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedCategory(category.slug)
              }
            >

              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <h3>{category.name}</h3>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;