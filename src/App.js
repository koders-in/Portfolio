import { useState, useEffect } from "react";
import "./App.css";
import About from ".././src/components/About/About";
import TitlePage from ".././src/components/TitlePage/TitlePage";
import Footer from "./components/Footer/Footer";
import KeyValues from "./components/KeyValues/KeyValues";
import Clients from ".././src/components/Clients/Clients";
import Portfolio from ".././src/components/Portfolio/Portfolio";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import CookieConsent from "react-cookie-consent";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

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
            onAccept={() => {}}
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
            personalized ads or content, and analyze our traffic. By clicking
            'Accept All', you consent to our use of cookies.
          </CookieConsent>
        </>
      )}
    </div>
  );
}

export default App;
