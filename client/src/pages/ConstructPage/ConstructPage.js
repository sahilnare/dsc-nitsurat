import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbars from "../../components/Navbars/Navbars";
import Construction from "../../components/Construction/Construction";
import Footer from "../../components/Footer/Footer";

class ConstructPage extends Component {
	render() {
		return (
			<div>
				<Navbars />
				<Construction />
				<Footer />
			</div>
		);
	}
}

export default ConstructPage;
