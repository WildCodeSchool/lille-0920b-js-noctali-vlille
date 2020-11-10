import MapLille from "./components/MapLille";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
//import Menufoot from "./components/Menufoot";

function App() {
  return (
    <div>
      <Reset />

      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <MapLille />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
