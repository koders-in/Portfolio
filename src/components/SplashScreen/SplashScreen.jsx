import React from "react";
import "./SplashScreen.css";
import logo from "../../Assests/logo.png";

function SplashScreen() {
  return (
    <div className="splashscreen">
      <div className="logo">
        <img src={logo} alt="splash-screen-logo" />
      </div>
      <div className="progressbar" />
      <h1>
        VISION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KREATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INSPIRE
      </h1>
    </div>
  );
}

export default SplashScreen;
