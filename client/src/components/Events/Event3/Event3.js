import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import { FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import ML from "../img/03-event.webp";
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
				Machine Learning is among the most fascinating and popular branches of computer science and
				every coder, at some point, thinks of getting into it. Developers' Student Club is here with
				it's very first hands on workshop on Machine Learning,
				<br />
				A Beginner's Guide to ML. In this workshop, we'll help you differentiate between Machine
				Learning and AI.
				<br />
				<br />
				We'll help you get started with Data, data analysis and plotting libraries. This workshop
				will also introduce you to training and testing, learn the difference between classifier and
				regression models.
				<br />
				If you even have slight interest in learning ML, this is the workshop for you!
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
						<Card.Img variant="top" src={ML} />
						<Card.Body>
							<Card.Title>ML 101 Workshop</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">November 13, 6 PM IST</Card.Subtitle>
							<Card.Text>
								Introductory session on machine learning and dive into Convolutional Neural
								Networks.
							</Card.Text>
							<Card.Link
								href="https://www.instagram.com/p/B4xMsIojFAw/"
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
						<ModalTitle>ML 101 Workshop</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row>
								{window.innerWidth >= 650 && (
									<Col lg={6} sm={4} xs={4}>
										<img src={ML} alt="ML" className="event-image" />
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
