import carwaleImage from "../images/carwale.png";
import bikewaleImage from "../images/bikewala.png";
import mobilityImage from "../images/mobility.png";

import "./SecondFooter.css";

const SecondFooter = () => {
  return (
    <header className="brand-header">
      <div className="brand-container">

        
        <div className="group-logo">
          <span className="car">Car</span>
          <span className="trade-circle">T</span>
          <span className="rade">rade</span>
          <span className="tech">Tech</span>
          <span className="group-text">GROUP</span>
        </div>

        
        <div className="header-divider" />

        
        <div className="brand-item olx">
          <span className="olx-main">ol</span>
          <span className="olx-x">x</span>
          <small>INDIA</small>
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

       
        <div className="brand-item active-brand">
          <span className="cartrade-car">Car</span>
          <span className="cartrade-t">T</span>
          <span>rade</span>
        </div>

       
        <div className="brand-item mobility">
          <img
            src={mobilityImage}
            alt="Mobility Outlook"
          />
        </div>

      </div>
    </header>
  );
};

export default SecondFooter;