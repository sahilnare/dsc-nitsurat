import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../img/logo.jpg";
import LogoMobile from "../../img/dsc-mobile.jpg";
import "./Navbars.css";

class Navbars extends Component {
	state = {
		src: Logo,
		widthCheck: false,
		srcMobile: LogoMobile,
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
						{!this.state.widthCheck ? (
							<img src={this.state.src} alt="dsc" />
						) : (
							<img src={this.state.srcMobile} alt="dsc" />
						)}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/" className="nav-item">
								<h5>Home</h5>
							</Nav.Link>
							<Nav.Link href="/about" className="nav-item">
								<h5>About</h5>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navbars;
