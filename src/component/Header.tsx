import { FaSearch, FaChevronRight } from "react-icons/fa";

import { CiUser, CiHeart } from "react-icons/ci";

import logo from "../images/logo.png";

import "./Header.css";

interface HeaderProps {
  searchTerm: string;

  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="OLX" />
        </div>

        <div className="location-box">
          <svg
            className="location-icon"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            fill="currentColor"
          >
            <path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z" />
          </svg>

          <div className="location-text">
            <span>India</span>
          </div>

          <FaChevronRight className="arrow-icon" />
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder='Search "Cars"'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <button type="button">
            <FaSearch />
          </button>
        </div>

        <button className="header-action" type="button" aria-label="Wishlist">
          <CiHeart />

          <span>Wishlist</span>
        </button>

        <button className="header-action" type="button" aria-label="Login">
          <CiUser />

          <span>Login</span>
        </button>

        <button className="sell-btn" type="button">
          + SELL
        </button>
      </div>
    </header>
  );
}

export default Header;
