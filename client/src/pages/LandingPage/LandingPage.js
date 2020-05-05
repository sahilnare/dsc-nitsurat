import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import Logo from "../../img/dsc.jpg";
import ReactTypingEffect from "react-typing-effect";
import { Container, Row, Col } from "react-bootstrap";

import "./LandingPage.css";

class LandingPage extends Component {

	render() {
		return (
			<div className="LandingPage">
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
				</Container>
				<Footer />
			</div>
		);
	}
}

export default LandingPage;
