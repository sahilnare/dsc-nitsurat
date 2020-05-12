import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import { FaInstagram, FaYoutube} from "react-icons/fa";
import Pic from "./P1.png";
import "../Events.css";

class Sample extends Component {
	render() {
		return (
			<div className="Event1">
				<Card>
					<Card.Img variant="top" src={Pic} />
					<Card.Body>
						<Card.Title>Sample Card</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">DSC Journal Sample</Card.Subtitle>
						<Card.Text>
							Sample Card Created to create layout for events page.
						</Card.Text>
                        <Card.Link href="#" className="social-links instagram"><FaInstagram /></Card.Link>
                        <Card.Link href="#" className="social-links youtube"><FaYoutube /></Card.Link>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Sample;
