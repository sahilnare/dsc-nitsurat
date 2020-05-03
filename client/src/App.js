import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
