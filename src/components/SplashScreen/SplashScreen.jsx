import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import "./SplashScreen.css";
import logo from "../../Assests/logo.png";

function SplashScreen() {
  return (
    <div className="splashscreen">
      <div class="logo">
   <img src={logo} alt="logo" />
    </div>
    <div class="progressbar"></div>
    <h1>VISION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KREATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INSPIRE</h1>
    </div>
  );
}

export default SplashScreen;
