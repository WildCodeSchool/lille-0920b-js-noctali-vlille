import { Switch, Route } from "react-router-dom";
import MapLille from "./components/MapLille";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
      <Switch>
        <Route exact path="/" component={MapLille}/>
        <Route path="/about"> component={About}/>
        <Route path="/appdownload" component={AppDownload}/>
        <Route path="/teamnoctali" component={TeamNoctali} >
        <Route path="/stationslist" component={StationsList} >
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
