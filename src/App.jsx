import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import SplashScreen from "./components/SplashScreen/SplashScreen";
// const PortfolioDescriptionPage = React.lazy(() => import("./components/PortfolioDescriptionPage/PortfolioDescriptionPage"));

const Footer = React.lazy(() => import("./components/Footer/Footer"));
const TitlePage = React.lazy(() => import("./components/TitlePage/TitlePage"));
const About = React.lazy(() => import("./components/About/About"));
const KeyValues = React.lazy(() => import("./components/KeyValues/KeyValues"));
const OurClients = React.lazy(() => import("./components/Clients/OurClients"));
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"));

const COOKIE_NAME = "koders-portfolio";

function App() {
  const [loading, setLoading] = useState(false);
  const [userClick, setUserClick] = useState(false);
  const isAccept = getCookieConsentValue(COOKIE_NAME);

  useEffect(() => {
    if (Boolean(isAccept)) {
      const trackingID = import.meta.env.VITE_APP_TRACKING_ID;
      if (trackingID) {
        ReactGA.initialize(trackingID);
        ReactGA.pageview(window.location.pathname);
      } else {
        console.warn("Google Analytics tracking ID is not set.");
      }
    }
  }, [isAccept]);

  return (
    <Router>
      <RoutesWrapper
        loadingState={{ loading, setLoading }}
        handleAccept={() => setUserClick(true)}
        isAccept={isAccept}
      />
    </Router>
  );
}

function RoutesWrapper({ loadingState, handleAccept, isAccept }) {
  const { loading, setLoading } = loadingState;
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); // Optimized delay

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="App">
      {loading ? (
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <SplashScreen />
        </Suspense>
      ) : (
        <Suspense fallback={<div className="lazy-loading-spinner">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TitlePage />
                  <About />
                  <KeyValues />
                  <OurClients />
                  <Portfolio />
                  <CookieConsent
                    buttonText="Accept All"
                    cookieName={COOKIE_NAME}
                    enableDeclineButton
                    declineButtonText="Decline"
                    onAccept={handleAccept}
                    style={{ background: "#1d2c48", fontSize: "14px", textAlign: "left" }}
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
                    We use cookies to enhance your browsing experience and analyze our traffic.
                  </CookieConsent>
                </>
              }
            />
            {/* <Route
              path="/portfolio/:title"
              element={<PortfolioDescriptionPage />}
            />          */}
            </Routes>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default App;