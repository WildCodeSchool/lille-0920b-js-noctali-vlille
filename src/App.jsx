import { Switch, Route } from "react-router-dom";
import MapLille from "./components/MapLille";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Reset } from "styled-reset";
import About from "./components/About";
import AppDownload from "./components/AppDownload";
import TeamNoctali from "./components/TeamNoctali";
import StationsList from "./components/StationsList";
import Reminder from "./components/Reminder";

function App() {
  return (
    <div>
      <Reset />

      <Header />
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
        <Route path="/stationslist">
          <StationsList />
        </Route>
        <Route path="/reminder">
          <Reminder />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
