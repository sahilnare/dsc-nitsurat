import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import { FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Orientation from "../img/01-event.webp";
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
				We are from DSC, which stands for Developer's Student Club, facilitated by Google
				Developers' Group.
				<br />
				At DSC, our fundamental intention is to help you channel all your potential free time and
				energy into learning development skills that will help you build real-world projects, which
				ultimately will add value to your profiles.
				<br />
				<br />
				Through workshops, meet-ups and seminars, we will help you find the specific areas of
				technology where your zeal lies. Who doesn't want their candidatures to take an edge over
				others? We are certain we can help you with that. To know more about us and how to become a
				part of our family, we are organising an orientation wherein we'll provide you with a deeper
				insight about every facet of DSC.
				<br />
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
						<Card.Img variant="top" src={Orientation} />
						<Card.Body>
							<Card.Title>Orientation 2k19</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">October 15, 5:30 PM IST</Card.Subtitle>
							<Card.Text>DSC orientation to spread the importance and features of DSC.</Card.Text>
							<Card.Link
								href="https://www.instagram.com/p/B3jj0TzjKmW/"
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
						<ModalTitle>Orientation 2k19</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<Container>
							<Row>
								{window.innerWidth >= 650 && (
									<Col lg={6} sm={4} xs={4}>
										<img src={Orientation} alt="orientation" className="event-image" />
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
