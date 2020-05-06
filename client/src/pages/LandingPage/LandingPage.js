import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import Logo from "../../img/dsc.jpg";
import Connect from "../../img/features/connect.jpg";
import Learn from "../../img/features/learn.jpg";
import Grow from "../../img/features/grow.jpg";
import ReactTypingEffect from "react-typing-effect";
import { Container, Row, Col, Alert } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./LandingPage.css";

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aosOffset: "400",
			featArr: true
		}
	}

	componentDidMount() {
		AOS.init();
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		if(window.innerWidth <= 991) {
			this.setState({ aosOffset: "200", featArr: false });
		} else {
			this.setState({ aosOffset: "400", featArr: true });
		}
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
				  	<Alert variant="light" className="reasons" data-aos="fade-up" data-aos-offset={this.state.aosOffset}>
						Why Join DSC NIT-SURAT?
					</Alert>
					<Row className="dsc-features">
						<Col className="feature-image" lg={4} data-aos="fade-right" data-aos-offset={this.state.aosOffset}>
							<img src={Connect} className="feature-design" alt="dsc-nitsurat" />
						</Col>
						<Col className="feature-description" data-aos="fade-left" data-aos-offset={this.state.aosOffset}>
							<h3>Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors.</h3>
						</Col>
					</Row>
					{
						this.state.featArr ? (
							<Row className="dsc-features">
								<Col className="feature-description" data-aos="fade-right" data-aos-offset={this.state.aosOffset}>
									<h3>Learn about a wide range of technical topics where new skills are gained through hands-on workshops, in-person training and project building activities.</h3>
								</Col>
								<Col className="feature-image" lg={4} data-aos="fade-left" data-aos-offset={this.state.aosOffset}>
									<img src={Learn} className="feature-design" alt="dsc-nitsurat" />
								</Col>
							</Row>
						) : (
							<Row className="dsc-features">
								<Col className="feature-image" lg={4} data-aos="fade-left" data-aos-offset={this.state.aosOffset}>
									<img src={Learn} className="feature-design" alt="dsc-nitsurat" />
								</Col>
								<Col className="feature-description" data-aos="fade-right" data-aos-offset={this.state.aosOffset}>
									<h3>Learn about a wide range of technical topics where new skills are gained through hands-on workshops, in-person training and project building activities.</h3>
								</Col>
							</Row>
						)
					}
					<Row className="dsc-features">
						<Col className="feature-image" lg={4} data-aos="fade-right" data-aos-offset={this.state.aosOffset}>
							<img src={Grow} className="feature-design" alt="dsc-nitsurat" />
						</Col>
						<Col className="feature-description" data-aos="fade-left" data-aos-offset={this.state.aosOffset}>
							<h3>Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network. Give back to your community by helping others learn as well.</h3>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default LandingPage;
