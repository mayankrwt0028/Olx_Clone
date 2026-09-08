import { FaArrowRight, FaTag } from "react-icons/fa";

import "./SellBanner.css";

function SellBanner() {
  return (
    <section className="sell-banner">
      <div className="sell-banner-container">
        <div className="sell-banner-icon">
          <FaTag />
        </div>

        <div className="sell-banner-content">
          <h2>Got something to sell?</h2>

          <p>
            Turn your unused items into cash. Post your ad and reach buyers near
            you.
          </p>
        </div>

        <button className="start-selling-btn" type="button">
          Start Selling
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default SellBanner;
