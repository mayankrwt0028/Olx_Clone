
import {
  FaSearch,
  FaMapMarkerAlt,
  
  FaChevronRight,

 
} from "react-icons/fa";
import { CiUser, CiHeart } from "react-icons/ci";

import logo from "../images/logo.png";

import "./Header.css";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<
    React.SetStateAction<string>
  >;
}

function Header({
  searchTerm,
  setSearchTerm,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">

       
        <div className="logo">
          <img src={logo} alt="OLX" />
        </div>

  
        <div className="location-box">

          <FaMapMarkerAlt className="location-icon" />

          <div className="location-text">
            <span>India</span>
          </div>

          <FaChevronRight className="arrow-icon" />

        </div>

    
        <div className="search-box">

          <input
            type="text"
            placeholder="Search for Cars, Mobiles, Properties and more..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          <button type="button">
            <FaSearch />
          </button>

        </div>

     
        <button
          className="header-action"
          type="button"
          aria-label="Wishlist"
        >
          <CiHeart />
          <span>Wishlist</span>
        </button>

   
        <button
          className="header-action"
          type="button"
          aria-label="Login"
        >
          <CiUser />
          <span>Login</span>
        </button>


        <button
          className="sell-btn"
          type="button"
        >
          + SELL
        </button>

      </div>
    </header>
  );
}

export default Header;

