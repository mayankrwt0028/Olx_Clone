import "./DownloadApp.css";

import qrImage from "../images/QR.png";

function DownloadApp() {
  return (
    <div className="download-app">
      <img
        src={qrImage}
        alt="Download OLX App QR Code"
        className="qr-image"
      />

      <div className="download-text">
        <span>Download</span>
        <span>The OLX App</span>
      </div>
    </div>
  );
}

export default DownloadApp;