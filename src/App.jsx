import MapLille from "./components/MapLille";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { Reset } from "styled-reset";
import StationsList from "./components/StationsList";

function App() {
	return (
		<div>
			<Reset />
			<Header />
			<StationsList />
			<Footer />
		</div>
	);
}

export default App;
