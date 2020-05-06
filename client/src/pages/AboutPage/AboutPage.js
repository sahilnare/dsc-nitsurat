import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Container, Row, Col } from "react-bootstrap";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import Developer from "../../img/developers.gif";
import "./AboutPage.css";

class AboutPage extends Component {
	render() {
		return (
			<div className="About">
				<Navbars />
				<Container fluid className="AboutPage">
					<Row className="dsc-about">
						<Col lg={6} className="image">
							<Image src={Developer} width="800" height="500" />
						</Col>
						<Col lg={6} className="context">
                            <h1>What we're about?</h1>
							<h3>
                                <b>Developer Student Clubs (DSC)</b> is a community where programmers meet to discuss and work with several Google developer resources and products. 
                                A DSC event has a diversified event portfolio, from just a few people meeting up to build products to large events with demos and lectures 
                                to conducting big hackathons.
                                <br /><br />
                                <b>Disclaimer</b>: DSC, NIT Surat is an independent group; our activities and the opinions expressed here should in no way 
                                be linked to Google, the corporation.
							</h3>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default AboutPage;
