import React from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
	return (
		<React.Fragment>
			<LandingPage />
			<About />
			<Articles />
			<Footer />
		</React.Fragment>
	);
}

export default App;
