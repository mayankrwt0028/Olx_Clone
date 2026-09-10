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
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 1024 1024"
    fillRule="evenodd"
    aria-hidden="true"
  >
    <path
      d="M896 682.667l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 469.333l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 256l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768z"
    />
  </svg>

  <span id="all">ALL CATEGORIES</span>
</button>

<div className="all-categor">
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
          <div className="navbar-date">
          <span className="navbar-date-line" />

          <span id="dates">20 Sep, 2026</span>
        </div>
        </div>

</div>
        

      </div>
    </nav>
  );
}

export default CategoryNav;