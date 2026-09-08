import { FaBars } from "react-icons/fa";

import { navCategories } from "../storage/NavCategory";

import "./Navbar.css";

interface CategoryNavProps {
  selectedCategory: string;

  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

function CategoryNav({
  selectedCategory,
  setSelectedCategory,
}: CategoryNavProps) {
  return (
    <nav className="category-navigation">
      <div className="navbar-container">
       

        <button
          type="button"
          className="navbar-all-categories"
          onClick={() => setSelectedCategory("")}
        >
          <FaBars />

          <span>ALL CATEGORIES</span>
        </button>

        

        <div className="navbar-category-list">
          {navCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={`navbar-category-item ${
                selectedCategory === category.slug ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="navbar-date">
          <span className="navbar-date-line" />

          <span>09 Sep, 2026</span>
        </div>
      </div>
    </nav>
  );
}

export default CategoryNav;
