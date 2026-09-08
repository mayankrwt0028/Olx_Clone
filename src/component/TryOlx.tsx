import olxAppImage from "../images/OLX.png";

import appStoreImage from "../images/appStore.png";

import googlePlayImage from "../images/google.png";

import "./TryOlx.css";

function TryOlx() {
  return (
    <section className="try-olx-app">
      <div className="try-olx-container">
        <div className="try-olx-image">
          <img src={olxAppImage} alt="OLX App" />
        </div>

        <div className="try-olx-content">
          <h2>TRY THE OLX APP</h2>

          <p>
            Buy, sell and find just about anything using
            <br />
            the app on your mobile.
          </p>
        </div>

        <div className="try-olx-divider"></div>

        <div className="try-olx-download">
          <span className="download-title">GET YOUR APP TODAY</span>

          <div className="download-buttons">
            <img src={appStoreImage} alt="Download on the App Store" />

            <img src={googlePlayImage} alt="Get it on Google Play" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TryOlx;
