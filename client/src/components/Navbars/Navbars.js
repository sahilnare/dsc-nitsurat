import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../img/logo.jpg";
import "./Navbars.css";

class Navbars extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="nav">
				<Navbar.Brand href="/">DSC NIT SURAT</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navbars;
