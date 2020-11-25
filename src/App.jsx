import { Switch, Route } from "react-router-dom";
import MapLille from "./components/MapLille";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Reset } from "styled-reset";
import StationsList from "./components/StationsList";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Switch>
        <Route exact path="/">
          <MapLille />
        </Route>
        <Route path="/stationslist">
          <StationsList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
