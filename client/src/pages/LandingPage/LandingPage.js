import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import Logo from "../../img/dsc.jpg";
import ReactTypingEffect from "react-typing-effect";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./LandingPage.css";

class LandingPage extends Component {

	componentDidMount() {
		AOS.init();
	}

	render() {
		return (
			<div className="Landing">
				<Navbars />
				<Container fluid className="LandingPage">
				  <Row className="dsc-body">
						<Col lg={6} className="image">
							<img src={Logo} className="dsc-logo" alt="dsc-nitsurat" />
						</Col>
				    <Col lg={6}>
							<h1 className="context">
								Here, you can <br />
								<ReactTypingEffect
									className="highlight"
									text={["develop.", "innovate.", "connect.", "build.", "grow."]}
									eraseDelay={1000}
									typingDelay={2000}
									speed={100}
								/>
							</h1>
						</Col>
				  </Row>
					<Row className="dsc-features">
						<Col className="feature-image" xs={4} data-aos="fade-right" data-aos-offset="400">
							<img src={Logo} className="feature-design" alt="dsc-nitsurat" />
						</Col>
						<Col className="feature-description" data-aos="fade-left" data-aos-offset="400">
							<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
						</Col>
					</Row>
					<Row className="dsc-features">
						<Col className="feature-description" data-aos="fade-right" data-aos-offset="400">
							<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
						</Col>
						<Col className="feature-image" xs={4} data-aos="fade-left" data-aos-offset="400">
							<img src={Logo} className="feature-design" alt="dsc-nitsurat" />
						</Col>
					</Row>
					<Row className="dsc-features">
						<Col className="feature-image" xs={4} data-aos="fade-right" data-aos-offset="400">
							<img src={Logo} className="feature-design" alt="dsc-nitsurat" />
						</Col>
						<Col className="feature-description" data-aos="fade-left" data-aos-offset="400">
							<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default LandingPage;
