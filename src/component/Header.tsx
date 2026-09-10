import { FaSearch } from "react-icons/fa";

import { CiUser, CiHeart } from "react-icons/ci";

import { IoChevronForwardOutline } from "react-icons/io5";

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
    width="21"
    height="30"
    viewBox="0 0 1024 1024"
    fill="currentColor"
  >
    <path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z" />
  </svg>

  <input
    className="location-input"
    placeholder="Search city, area or locality"
    value="India"
    readOnly
  />

  <button
    type="button"
    className="location-arrow"
    aria-label="select-location"
  >
    <svg
      width="17"
      height="17"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      fillRule="evenodd"
    >
      <path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z" />
    </svg>
  </button>

</div>

        <div className="search-box">
          <input
            type="text"
            id="seach-input-text"
            placeholder='Search "Cars"'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <button type="button">
  <svg
    width="24"
    height="24"
    viewBox="6 15 1024 900"
    fill="currentColor"
    fillRule="evenodd"
  >
    <path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z" />
  </svg>
</button>
        </div>
<div className="wish-logout">

  <button
    className="header-action"
    id="wishlist"
    type="button"
    aria-label="Wishlist"
  >
    <svg
      className="wishlist-icon"
      width="26"
      height="26"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      fillRule="evenodd"
    >
      <path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z" />
    </svg>

    <span>Wishlist</span>
  </button>


  <button
    className="header-action"
    id="login"
    type="button"
    aria-label="Login"
  >
    <svg
      className="login-icon"
      id="logic-svg"
      width="32"
      height="32"
      viewBox="6 -4 30 29"
      fill="currentColor"
      fillRule="evenodd"
    >
      <path d="M20 11.0003C24.5494 11.0003 28.25 14.7013 28.25 19.2503L27.333 20.1663H12.667L11.75 19.2503C11.75 14.7013 15.451 11.0003 20 11.0003ZM20 12.8333C16.7733 12.8333 14.0944 15.2281 13.6484 18.3333H26.3516C25.9056 15.2282 23.227 12.8334 20 12.8333ZM20 1.83331C22.2742 1.83331 24.125 3.68361 24.125 5.95831C24.125 8.23302 22.2743 10.0833 20 10.0833C17.7257 10.0833 15.875 8.23302 15.875 5.95831C15.875 3.68361 17.7258 1.83331 20 1.83331ZM20 3.66632C18.7364 3.66632 17.708 4.69471 17.708 5.95831C17.708 7.22194 18.7364 8.25031 20 8.25031C21.2636 8.25031 22.292 7.22194 22.292 5.95831C22.292 4.69471 21.2636 3.66632 20 3.66632Z" />
    </svg>

    <span id="login-text">Login</span>
  </button>

</div>
        <button className="sell-btn" type="button">
          + SELL
        </button>
      </div>
    </header>
  );
}

export default Header;
