import { FaChevronDown } from "react-icons/fa";

import { navCategories } from "../storage/NavCategory";

import "./Navbar.css";

interface CategoryNavProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
}

function CategoryNav({
  selectedCategory,
  setSelectedCategory,
}: CategoryNavProps) {
  return (
    <nav className="category-nav">
      <div className="category-container">

        <button
          type="button"
          className="all-categories"
          onClick={() => setSelectedCategory("")}
        >
          <span>ALL CATEGORIES</span>

          {/* <FaChevronDown /> */}
        </button>

        <div className="category-list">

          {navCategories.map((category) => (
            <button
              type="button"
              className={`category-item ${
                selectedCategory === category.slug
                  ? "active"
                  : ""
              }`}
              key={category.id}
              onClick={() =>
                setSelectedCategory(category.slug)
              }
            >
              {category.name}
            </button>
          ))}

        </div>

      </div>
    </nav>
  );
}

export default CategoryNav;