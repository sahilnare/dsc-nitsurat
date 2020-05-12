import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import ConstructPage from "./pages/ConstructPage/ConstructPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import EventPage from "./pages/EventPage/EventPage";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/events" component={EventPage} />
					<Route exact path="/team" component={TeamPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
