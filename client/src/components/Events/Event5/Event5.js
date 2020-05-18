import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Blockchain from "../img/05-event.webp";
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
				Everyone must have heard about Bitcoin and the technology behind it, Blockchain, and how
				it's going to revolutionize the digital supply chain.
				<br />
				But do you really know how it all works? How it ties into cryptocurrency or how the founder
				behind it is still unknown.
				<br />
				<br />
				DSC, SVNIT will be hosting a webinar to introduce you to different aspects of the exciting
				and emerging areas of blockchain and cryptocurrency in a session by industrial expert Punit
				Agarwal, founder of Zubi.
				<br />
				Join the webinar via Youtube Live on 12th May, from 6-7 PM to know all about the crypto
				secrets.
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
						<Card.Img variant="top" src={Blockchain} />
						<Card.Body>
							<Card.Title>Insight Into Blockchain</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">May 12, 6 PM IST</Card.Subtitle>
							<Card.Text>
								Webinar on blockchain by founder of Zubi.io on DSC Youtube Channel.
							</Card.Text>
							<Card.Link
								href="https://www.instagram.com/p/B_zk-toJmms/"
								target="_blank"
								className="social-links instagram"
							>
								<FaInstagram size={this.state.iconSize} />
							</Card.Link>
							<Card.Link
								href="https://www.youtube.com/watch?v=U9K1501G7IA"
								target="_blank"
								className="social-links youtube"
							>
								<FaYoutube size={this.state.iconSize} />
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
						<ModalTitle>Insight into Blockchain</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row>
								{window.innerWidth >= 650 && (
									<Col lg={6} sm={4} xs={4}>
										<img src={Blockchain} alt="Blockchain" className="event-image" />
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
