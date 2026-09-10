import "./Footer.css";

import instaIcon from "../images/insta.jpeg";
import youtubeIcon from "../images/youtube.jpeg";
import twitterIcon from "../images/twitter.jpeg";
import linkedinIcon from "../images/linkdin.png";
import whatsappIcon from "../images/whatapp.jpeg";
import facebookIcon from "../images/facebook.jpeg";

import appStoreImage from "../images/app2.png";
import playStoreImage from "../images/play2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Popular Locations</h3>

          <a href="#">Kolkata</a>
          <a href="#">Mumbai</a>
          <a href="#">Chennai</a>
          <a href="#">Pune</a>
        </div>

        {/* Trending Locations */}
        <div className="footer-column">
          <h3>Trending Locations</h3>

          <a href="#">Bhubaneshwar</a>
          <a href="#">Hyderabad</a>
          <a href="#">Chandigarh</a>
          <a href="#">Nashik</a>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>

          <a href="#">About OLX India</a>
          <a href="#">Ask YAYA AI</a>
          <a href="#">Tech@OLX India</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-column">
          <h3>OLX India</h3>

          <a href="#">Help</a>
          <a href="#">Sitemap</a>
          <a href="#">Legal & Privacy information</a>
          <a href="#">Vulnerability Disclosure Program</a>
        </div>

        <div className="footer-column follow-us">
          <h3>FOLLOW US</h3>

          <div className="social-icons">
            <a href="#">
              <img src={facebookIcon} alt="Facebook" className="facebook-icon" />
            </a>

            <a href="#">
              <img src={instaIcon} alt="Instagram" className="insta-icon"/>
            </a>

            <a href="#">
              <img src={youtubeIcon} alt="YouTube" className="you-icon" />
            </a>

            <a href="#">
              <img src={twitterIcon} alt="Twitter" className="x-icon" />
            </a>

            <a href="#">
              <img src={whatsappIcon} alt="WhatsApp" className="what-icon" />
            </a>

            <a href="#">
              <img src={linkedinIcon} alt="LinkedIn" className="link-icon"/>
            </a>
          </div>

          <a href="#" className="store-image-button">
            <img src={playStoreImage} alt="Get it on Google Play" />
          </a>

          <a href="#" className="store-image-button">
            <img src={appStoreImage} alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
