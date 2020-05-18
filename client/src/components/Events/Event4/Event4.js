import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import { FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Flutter from "../img/04-event.webp";
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
				Developers' Student Club is back with another hands on workshop on Cross Platform
				Application Development. Starting from the very basics, in this workshop, we'll teach you
				about the construction of User Interface in a mobile handset.
				<br />
				<br />
				You'll be able to successfully create basic Android, iOS, Web, Desktop and Embedded app with
				a codebase. Stop playing with apps, it is your turn to start creating them!
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
						<Card.Img variant="top" src={Flutter} />
						<Card.Body>
							<Card.Title>Flutter Workshop</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">January 16, 6 PM IST</Card.Subtitle>
							<Card.Text>
								Get started with flutter, a cross platform to build beautiful apps and join with us
								in this workshop.
							</Card.Text>
							<Card.Link
								href="https://www.instagram.com/p/B7WQsJXjO4Z/"
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
						<ModalTitle>Flutter Workshop</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row>
								{window.innerWidth >= 650 && (
									<Col lg={6} sm={4} xs={4}>
										<img src={Flutter} alt="Flutter" className="event-image" />
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
