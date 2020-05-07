import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
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
							<Nav.Link href="/" className="nav-item">
								<h5>Home</h5>
							</Nav.Link>
							<Nav.Link href="/about" className="nav-item">
								<h5>About</h5>
							</Nav.Link>
							<Nav.Link href="/events" className="nav-item">
								<h5>Events</h5>
							</Nav.Link>
							<Nav.Link href="/team" className="nav-item">
								<h5>Team</h5>
							</Nav.Link>
							<Nav.Link href="/#dsc-contact" className="nav-item contact">
								<h5>Contact Us</h5>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navbars;
