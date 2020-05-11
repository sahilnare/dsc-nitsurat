import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpg";
import "./Navbars.css";

class Navbars extends Component {
	state = {
		src: Logo,
		widthCheck: false,
	};

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ widthCheck: window.innerWidth <= 991 });
	}

	render() {
		return (
			<div>
				<Navbar className="Navbar" expand="lg" bg="light" variant="light">
					<Navbar.Brand href="/">
						<img src={this.state.src} alt="dsc" />
						{/* {!this.state.widthCheck ? (
							<p></p>
						) : (
							<p></p>
						)} */}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Link to="/" className="nav-item nav-link">
								<h5>Home</h5>
							</Link>
							<Link to="/about" className="nav-item nav-link">
								<h5>About</h5>
							</Link>
							<Link to="/events" className="nav-item nav-link">
								<h5>Events</h5>
							</Link>
							<Link to="/team" className="nav-item nav-link">
								<h5>Team</h5>
							</Link>
							<Link to="/#dsc-contact" className="nav-item nav-link contact">
								<h5>Contact Us</h5>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navbars;
