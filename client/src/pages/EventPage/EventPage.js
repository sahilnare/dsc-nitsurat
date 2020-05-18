import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";

import Event1 from "../../components/Events/Event1/Event1";
import Event2 from "../../components/Events/Event2/Event2";
import Event3 from "../../components/Events/Event3/Event3";
import Event4 from "../../components/Events/Event4/Event4";
import Event5 from "../../components/Events/Event5/Event5";

import "./EventPage.css";
class EventPage extends Component {
	render() {
		return (
			<div className="EventPage">
				<Navbars />
				<h1 className="title">DSC NIT SURAT JOURNAL</h1>
				<Container>
					<Row>
						<Col lg={4} md={6} sm={6} xs={12}>
							<Event5 />
						</Col>
						<Col lg={4} md={6} sm={6} xs={12}>
							<Event4 />
						</Col>
						<Col lg={4} md={6} sm={6} xs={12}>
							<Event3 />
						</Col>
						<Col lg={4} md={6} sm={6} xs={12}>
							<Event2 />
						</Col>
						<Col lg={4} md={6} sm={6} xs={12}>
							<Event1 />
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default EventPage;
