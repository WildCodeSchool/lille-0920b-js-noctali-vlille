import MapLille from "./components/MapLille";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { Reset } from "styled-reset";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import AppDownload from "./components/AppDownload";
import TeamNoctali from "./components/TeamNoctali";
import StationsList from "./components/StationsList";


function App() {
  return (
    <div>
      <Reset />

      <Header />
      <StationsList/>
      <Switch>
        <Route exact path="/">
          <MapLille />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/appdownload">
          <AppDownload />
        </Route>
        <Route path="/teamnoctali">
          <TeamNoctali />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
