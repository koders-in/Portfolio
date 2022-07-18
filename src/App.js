import { useState, useEffect } from 'react';
import './App.css';
import About from ".././src/components/About/about";
import TitlePage from ".././src/components/TitlePage/titlePage";
import Footer from "./components/Footer/footer";
import KeyValues from "./components/KeyValues/keyValues";
import Portfolio from ".././src/components/Portfolio/portfolio";
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
          <Portfolio />
          <Footer />
          </>
        )
      }
      
      
      
    </div>
  );
}

export default App;

