import MapLille from "./components/MapLille";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { Reset } from "styled-reset";

function App() {
  return (
    <div>
      <Reset/>
      <Header />
      <MapLille />
      <Footer />
      
    </div>
  );
}

export default App;
