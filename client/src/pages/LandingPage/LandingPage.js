import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import Logo from "../../img/dsc.jpg";
import Connect from "../../img/features/connect.jpg";
import Learn from "../../img/features/learn.jpg";
import Grow from "../../img/features/grow.jpg";
import Contact from "../../img/gif/contact.gif";
import ReactTypingEffect from "react-typing-effect";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FaMeetup, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import "./LandingPage.css";

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aosOffset: "400",
			featArr: true,
			dataAosLeft: "fade-left",
			dataAosRight: "fade-right",
		};
	}

	componentDidMount() {
		AOS.init();
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		if (window.innerWidth <= 991) {
			this.setState({
				aosOffset: "200",
				featArr: false,
				dataAosLeft: "fade-up",
				dataAosRight: "fade-up",
			});
		} else {
			this.setState({
				aosOffset: "400",
				featArr: true,
				dataAosLeft: "fade-left",
				dataAosRight: "fade-right",
			});
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
					<Alert
						variant="light"
						className="reasons"
						data-aos="fade-up"
						data-aos-offset={this.state.aosOffset}
					>
						Why Join DSC NIT-SURAT?
					</Alert>
					<Row className="dsc-features">
						<Col
							className="feature-image"
							lg={4}
							data-aos={this.state.dataAosRight}
							data-aos-offset={this.state.aosOffset}
						>
							<img src={Connect} className="feature-design" alt="dsc-nitsurat" />
						</Col>
						<Col
							className="feature-description"
							data-aos={this.state.dataAosLeft}
							data-aos-offset={this.state.aosOffset}
						>
							<h3>
								Meet other students on campus interested in developer technologies. All are welcome,
								including those with diverse backgrounds and different majors.
							</h3>
						</Col>
					</Row>
					{this.state.featArr ? (
						<Row className="dsc-features">
							<Col
								className="feature-description"
								data-aos={this.state.dataAosRight}
								data-aos-offset={this.state.aosOffset}
							>
								<h3>
									Learn about a wide range of technical topics where new skills are gained through
									hands-on workshops, in-person training and project building activities.
								</h3>
							</Col>
							<Col
								className="feature-image"
								lg={4}
								data-aos={this.state.dataAosLeft}
								data-aos-offset={this.state.aosOffset}
							>
								<img src={Learn} className="feature-design" alt="dsc-nitsurat" />
							</Col>
						</Row>
					) : (
						<Row className="dsc-features">
							<Col
								className="feature-image"
								lg={4}
								data-aos={this.state.dataAosLeft}
								data-aos-offset={this.state.aosOffset}
							>
								<img src={Learn} className="feature-design" alt="dsc-nitsurat" />
							</Col>
							<Col
								className="feature-description"
								data-aos={this.state.dataAosRight}
								data-aos-offset={this.state.aosOffset}
							>
								<h3>
									Learn about a wide range of technical topics where new skills are gained through
									hands-on workshops, in-person training and project building activities.
								</h3>
							</Col>
						</Row>
					)}
					<Row className="dsc-features">
						<Col
							className="feature-image"
							lg={4}
							data-aos={this.state.dataAosRight}
							data-aos-offset={this.state.aosOffset}
						>
							<img src={Grow} className="feature-design" alt="dsc-nitsurat" />
						</Col>
						<Col
							className="feature-description"
							data-aos={this.state.dataAosLeft}
							data-aos-offset={this.state.aosOffset}
						>
							<h3>
								Apply your new learnings and connections to build great solutions for local
								problems. Advance your skills, career and network. Give back to your community by
								helping others learn as well.
							</h3>
						</Col>
					</Row>
					<div id="dsc-contact">
						<Alert
							variant="light"
							className="reasons contact"
							data-aos="fade-up"
							data-aos-offset={this.state.aosOffset}
						>
							Where Can You Find Us?
						</Alert>
						<Row className="dsc-features social">
							<Col
								className="feature-image animate"
								lg={4}
								data-aos={this.state.dataAosRight}
								data-aos-offset={this.state.aosOffset}
							>
								<img src={Contact} className="feature-design" alt="dsc-contact" />
							</Col>
							<Col lg={1} />
							<Col data-aos={this.state.dataAosLeft} data-aos-offset={this.state.aosOffset}>
								<a
									href="https://www.linkedin.com/company/dsc-nit-surat-powered-by-google-developers/"
									rel="noopener noreferrer"
									target="_blank"
									className="linkedin"
								>
									<FaLinkedin className="link LinkedIn" />
								</a>
								<a
									href="https://www.meetup.com/Developer-Student-Club-NIT-Surat/"
									rel="noopener noreferrer"
									target="_blank"
									className="meetup"
								>
									<FaMeetup className="link Meetup" />
								</a>
								<a href="mailto:dscnitsurat@gmail.com" className="mail">
									<FaMailBulk className="link MailBulk" />
								</a>
								<a
									href="https://github.com/dsc-nit-surat"
									rel="noopener noreferrer"
									target="_blank"
									className="github"
								>
									<FaGithub className="link Github" />
								</a>
							</Col>
						</Row>
					</div>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default LandingPage;
