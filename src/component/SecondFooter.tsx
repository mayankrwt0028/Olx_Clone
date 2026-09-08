import carwaleImage from "../images/carwale.png";
import bikewaleImage from "../images/bikewala.png";
import mobilityImage from "../images/mobility.png";

import "./SecondFooter.css";

const SecondFooter = () => {
  return (
    <section className="brand-footer">
      <div className="brand-container">


        <div className="group-logo">

          <div className="group-logo-main">
            <span>Car</span>

            <span className="trade-circle">
              T
            </span>

            <span>rade</span>

            <span className="tech">
              Tech
            </span>
          </div>

          <span className="group-text">
            GROUP
          </span>

        </div>


 
        <div className="header-divider" />


    
        <div className="brand-item olx">

          <div className="olx-logo">
            olx
          </div>

          <small>
            INDIA
          </small>

        </div>


     
        <div className="brand-item carwale">
          <img
            src={carwaleImage}
            alt="CarWale"
          />
        </div>


    
        <div className="brand-item bikewale">
          <img
            src={bikewaleImage}
            alt="BikeWale"
          />
        </div>


    
        <div className="brand-item cartrade">

          <span>Car</span>

          <span className="cartrade-t">
            T
          </span>

          <span>rade</span>

        </div>



        <div className="brand-item mobility">

          <img
            src={mobilityImage}
            alt="Mobility Outlook"
          />

        </div>

      </div>


      <div className="brand-footer-bottom">

        <span>
          Help - Sitemap
        </span>

        <span>
          All rights reserved © 2006-2026 OLX
        </span>

      </div>

    </section>
  );
};

export default SecondFooter;