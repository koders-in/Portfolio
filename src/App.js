import './App.css';
import About from ".././src/components/About/about";
import TitlePage from ".././src/components/TitlePage/titlePage";
import Footer from ".././src/components/Footer/footer";
import KeyValues from ".././src/components/KeyValues/keyValues";
import Portfolio from ".././src/components/Portfolio/portfolio";
function App() {
  return (
    <div className="App">
      <TitlePage  />
      <About />
      <KeyValues />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
