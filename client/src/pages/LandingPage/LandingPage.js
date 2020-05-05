import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Logo from "../../img/dsc.jpg";
import ReactTypingEffect from "react-typing-effect";
import { Container, Row, Col } from "react-bootstrap";

import "./LandingPage.css";

class LandingPage extends Component {

	render() {
		return (
			<div className="LandingPage">
				<Navbars />
				{/*<div className="dsc-body">
					<img src={Logo} className="image" alt="dsc-nitsurat" />
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
				</div>*/}
				<Container fluid>
				  <Row>
						<Col>
							<img src={Logo} className="image" alt="dsc-nitsurat" />
						</Col>
				    <Col>
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
			</div>
		);
	}
}

export default LandingPage;
