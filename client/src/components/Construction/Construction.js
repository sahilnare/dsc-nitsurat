import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Construct from "../../img/construct.png";
import ReactSpinner from "react-bootstrap-spinner";
import "./Construction.css";

class Construction extends Component {
	state = {
		widthCheck: false,
	};

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ widthCheck: window.innerWidth <= 575 });
	}
	render() {
		return (
			<div className="Construction">
				<img src={Construct} alt="Page Under Construction" className="image" />
				<br />
				<div className="Loader">
					<h1>Under Construction</h1>
				</div>
				<br />
				{this.state.widthCheck ? (
					<ReactSpinner type="border" size="3" />
				) : (
					<ReactSpinner type="border" size="4" />
				)}
			</div>
		);
	}
}

export default Construction;
