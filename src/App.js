import { useState, useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga";
import {
  About,
  Clients,
  Footer,
  KeyValues,
  Portfolio,
  SplashScreen,
  TitlePage,
} from "./components";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

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
  }, [isAccept, userClick]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  const handleAccept = () => {
    setUserClick(true);
  };

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <TitlePage />
          <About />
          <KeyValues />
          <Clients />
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
        </>
      )}
    </div>
  );
}

export default App;
