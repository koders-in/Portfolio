import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import "./SplashScreen.css";
import logo from "../../Assests/logo.png";

function SplashScreen() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
    }, 3000);
  });

  return (
    <div className="SplashScreen">
      <LoadingBar color="#17c3b7" ref={ref} />
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default SplashScreen;
