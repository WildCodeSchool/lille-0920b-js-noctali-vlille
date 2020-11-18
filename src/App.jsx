import Header from "./components/Header";
import MapLille from "./components/MapLille";
import Reminder from "./components/Reminder";
import Footer from "./components/Footer";
import "./App.css";
import { Reset } from "styled-reset";

function App() {
	return (
		<div>
			<Reset />
			<Header />
			<MapLille />
			<Reminder />
			<Footer />
		</div>
	);
}

export default App;
