import { useState, useEffect } from 'react';
import './App.css';
import About from ".././src/components/About/About";
import TitlePage from ".././src/components/TitlePage/TitlePage";
import Footer from "./components/Footer/Footer";
import KeyValues from "./components/KeyValues/KeyValues";
import Clients from ".././src/components/Clients/Clients";
import Portfolio from ".././src/components/Portfolio/Portfolio";
import SplashScreen from './components/SplashScreen/SplashScreen';


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
      {
        loading ? (
          <SplashScreen />
        ) : ( <>
          <TitlePage  />
          <About />
          <KeyValues />
          <Clients />
          <Portfolio />
          <Footer />
          </>
        )
      }
    </div>
  );
}

export default App;

