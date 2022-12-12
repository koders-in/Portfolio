import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";
import ReactGA from "react-ga";

import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import OurClients from "./components/Clients/OurClients";

const About = React.lazy(() => import("./components/About/About"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const KeyValues = React.lazy(() => import("./components/KeyValues/KeyValues"));
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"));
const SplashScreen = React.lazy(() =>
  import("./components/SplashScreen/SplashScreen")
);
const TitlePage = React.lazy(() => import("./components/TitlePage/TitlePage"));

const COOKIE_NAME = "koders-portfolio";

function App() {
  const [loading, setLoading] = useState(false);
  const [userClick, setUserClick] = useState(false);
  const isAccept = getCookieConsentValue(COOKIE_NAME);

  useEffect(() => {
    if (Boolean(isAccept)) {
      const trackingID = process.env.REACT_APP_TRACKING_ID;
      if (trackingID) {
        ReactGA.initialize(trackingID);
      }
    }
    ReactGA.pageview(window.location.pathname);
  }, [isAccept, userClick]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const handleAccept = () => {
    setUserClick(true);
  };

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <TitlePage />
          <About />
          <KeyValues />
          <OurClients />
          <Portfolio />
          <Footer />
          <CookieConsent
            buttonText="Accept All"
            cookieName="koders-portfolio"
            enableDeclineButton
            setDeclineCookie={false}
            declineButtonText="Decline"
            onAccept={handleAccept}
            style={{
              background: "#1d2c48",
              fontSize: "14px",
              textAlign: "left",
            }}
            buttonStyle={{
              padding: "10px 20px",
              border: "1px solid #ffffff",
              color: "#ffffff",
              background: "transparent",
            }}
            declineButtonStyle={{
              border: "1px solid gray",
              background: "transparent",
              padding: "10px 20px",
              color: "gray",
            }}
          >
            We use cookies to enhance your browsing experience, serve
            personalized content, and analyze our traffic. By clicking 'Accept
            All', you consent to our use of cookies.
          </CookieConsent>
        </Suspense>
      )}
    </div>
  );
}

export default App;
