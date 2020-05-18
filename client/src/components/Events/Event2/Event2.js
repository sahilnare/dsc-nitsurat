import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import { FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Fedora from "../img/02-event.webp";
import "../Events.css";

// Importing all Modal Requirements
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

class Event5 extends Component {
	state = {
		isOpen: false,
		iconSize: 45,
	};

	openModal = () => {
		this.setState({ isOpen: true });
	};

	hideModal = () => {
		this.setState({ isOpen: false });
	};

	content = () => {
		return (
			<p>
				By now most of you must've come across people saying Open source, development and
				contributions. These terms, though being a little self-explanatory, have deep meanings and
				backgrounds.
				<br />
				To clear the fog obfuscating you, we've come up with a seminar wherein we'll introduce you
				to Open Source Software(OSS) and ways of getting associated with it through incentives like
				Outreachy and Google Summer of Code.
				<br />
				<br />
				Fedora, an open source Linux based OS, through it's initiative of Women in Fedora aims to
				engender involvement of women in Fedora's OSS community and help them make valuable
				contributions to the Fedora project.
			</p>
		);
	};

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		if (window.innerWidth <= 575) {
			this.setState({
				iconSize: 28,
			});
		} else {
			this.setState({
				iconSize: 35,
			});
		}
	}

	render() {
		return (
			<div className="Event5">
				<div
					onClick={() => {
						this.openModal();
					}}
					className="EventCard"
				>
					<Card>
						<Card.Img variant="top" src={Fedora} />
						<Card.Body>
							<Card.Title>Women in Fedora</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">November 6, 6 PM IST</Card.Subtitle>
							<Card.Text>
								Talk on the fedora organization by outreachy intern Shraddha Agarwal.
							</Card.Text>
							<Card.Link
								href="https://www.instagram.com/p/B4fiGyTDr9C/"
								target="_blank"
								className="social-links instagram"
							>
								<FaInstagram size={this.state.iconSize} />
							</Card.Link>
						</Card.Body>
					</Card>
				</div>
				<Modal
					size="lg"
					show={this.state.isOpen}
					onHide={() => {
						this.hideModal();
					}}
					dialogClassName="custom-dialog"
					aria-labelledby="Modal related to the event"
				>
					<ModalHeader closeButton>
						<ModalTitle>Women in Fedora</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row>
								{window.innerWidth >= 650 && (
									<Col lg={6} sm={4} xs={4}>
										<img src={Fedora} alt="Fedora" className="event-image" />
									</Col>
								)}
								{window.innerWidth >= 650 && window.innerWidth < 992 && (
									<Col lg={0} sm={2} className="blank" />
								)}
								{window.innerWidth >= 650 ? (
									<Col lg={5} sm={6} className="content">
										{this.content()}
									</Col>
								) : (
									<Col sm={12} className="content">
										{this.content()}
									</Col>
								)}
							</Row>
						</Container>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default Event5;
