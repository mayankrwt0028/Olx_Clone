import "./Footer.css";

import instaIcon from "../images/insta.jpeg";
import youtubeIcon from "../images/youtube.jpeg";
import twitterIcon from "../images/twitter.jpeg";
import linkedinIcon from "../images/linkdin.png";
import appleIcon from "../images/apple.png";
import whatsappIcon from "../images/whatapp.jpeg"
import facebookIcon from "../images/facebook.jpeg"

import playstoreIcon from "../images/playstore.png";

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
      <img src={instaIcon} alt="Instagram" />
    </a>
     <a href="#">
      <img src={facebookIcon} alt="Facebook" id="facebook" />
    </a>

    <a href="#">
      <img src={youtubeIcon} alt="YouTube" />
    </a>

    <a href="#">
      <img src={twitterIcon} alt="Twitter" />
    </a>
     <a href="#">
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>

    <a href="#">
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>

  </div>


  <a href="#" className="store-button">
    <img src={playstoreIcon} alt="Google Play" />
    <div>
      <span>GET IT ON</span>
      <strong>Google Play</strong>
    </div>
  </a>

  {/* App Store */}
  <a href="#" className="store-button">
    <img src={appleIcon} alt="App Store" />
    <div>
      <span>Download on the</span>
      <strong>App Store</strong>
    </div>
  </a>
</div>

      </div>
    </footer>
  );
}

export default Footer;