import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import MaleAvatar from "../../img/avatar/male.jpg";
import MaleAvatar2 from "../../img/avatar/male2.jpg";
import FemaleAvatar from "../../img/avatar/female.jpg";
import FemaleAvatar2 from "../../img/avatar/female2.jpg";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./TeamPage.css";

class TeamPage extends Component {
	render() {
		return (
			<div className="TeamPage">
				<Navbars />
				<Container className="TeamImage">
					<Row>
						<Col lg={12}>
							<Jumbotron className="main-text">
								<h1 className="title"> The Team </h1>
								<h3 className="sub-title">
									{" "}
									Presenting you the board of developers & tech enthusiast.
								</h3>
							</Jumbotron>
						</Col>
						<a href="#team">
							<div className="round">
								<svg class="arrows">
									<path class="a3" d="M0 50 L16 72 L32 50"></path>
								</svg>
							</div>
						</a>
					</Row>
				</Container>
				<div id="team">
					<Timeline lineColor={"#ddd"}>
						<TimelineItem
							key="001"
							dateText="CORE TEAM 2K20-2K21"
							style={{ color: "#4083f7" }}
							dateInnerStyle={{ background: "#4083f7" }}
						>
							<div className="item">
								<img src={MaleAvatar} alt="male-avatar" className="avatar" />
								<span className="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={FemaleAvatar2} alt="female-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={FemaleAvatar} alt="female-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar2} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={FemaleAvatar2} alt="female-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar2} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar2} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={FemaleAvatar} alt="female-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
						</TimelineItem>
						<TimelineItem
							key="002"
							dateText="CORE TEAM 2K19-2K20"
							style={{ color: "#fa4335" }}
							dateInnerStyle={{ background: "#fa4355" }}
						>
							<div className="item">
								<img src={MaleAvatar} alt="male-avatar" className="avatar" />
								<span className="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={FemaleAvatar2} alt="female-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={FemaleAvatar} alt="female-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={MaleAvatar2} alt="male-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={FemaleAvatar2} alt="female-avatar" className="avatar" />
								<span class="caption">Name-DSC</span>
								<span class="caption">Developer</span>
							</div>
						</TimelineItem>
					</Timeline>
				</div>
				<Footer />
			</div>
		);
	}
}

export default TeamPage;
