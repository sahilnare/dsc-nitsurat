import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import AJ from "../../img/avatar/2k20-2k21/aj.jpeg";
import NKG from "../../img/avatar/2k20-2k21/nkg.jpeg";
import GS from "../../img/avatar/2k20-2k21/gs.jpeg";
import SN from "../../img/avatar/2k20-2k21/sn.jpeg";
import AS from "../../img/avatar/2k20-2k21/as.jpeg";
import ST from "../../img/avatar/2k20-2k21/st.jpeg";
import PP from "../../img/avatar/2k20-2k21/pp.jpeg";
import AD from "../../img/avatar/2k20-2k21/ad.jpeg";
import MS from "../../img/avatar/2k20-2k21/ms.jpeg";
import A from "../../img/avatar/2k20-2k21/a.jpeg";

import KS from "../../img/avatar/2k19-2k20/ks.jpeg";
import DS from "../../img/avatar/2k19-2k20/ds.jpeg";
import SD from "../../img/avatar/2k19-2k20/sd.jpeg";
import RS from "../../img/avatar/2k19-2k20/rs.jpeg";
import IH from "../../img/avatar/2k19-2k20/ih.jpeg";
import HB from "../../img/avatar/2k19-2k20/hb.jpeg";
import PT from "../../img/avatar/2k19-2k20/pt.jpeg";
import PS from "../../img/avatar/2k19-2k20/ps.jpeg";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./TeamPage.css";

class TeamPage extends Component {
	render() {
		return (
			<div className="TeamPage">
				<Navbars />
				<div className="description">
					<Container className="TeamImage">
						<Row>
							<Col lg={12}>
								<Jumbotron className="main-text">
									<h1 className="title"> The Team </h1>
									<h3 className="sub-title">
										{" "}
										Presenting you the board of developers & tech enthusiasts.
									</h3>
								</Jumbotron>
							</Col>
						</Row>
					</Container>
				</div>
				<a href="#team">
					<div className="round">
						<svg class="arrows">
							<path class="a3" d="M0 50 L16 72 L32 50"></path>
						</svg>
					</div>
				</a>
				<div id="team">
					<Timeline lineColor={"#ddd"}>
						<TimelineItem
							key="001"
							dateText="2K20-2K21"
							style={{ color: "#4083f7" }}
							dateInnerStyle={{ background: "#4083f7" }}
						>
							<div className="item">
								<img src={AJ} alt="Aemie Jariwala" className="avatar" />
								<span className="caption">Aemie Jariwala</span>
								<span class="caption">Blockchain</span>
							</div>
							<div className="item">
								<img src={NKG} alt="Nikhil Kumar Gautam" className="avatar" />
								<span class="caption">Nikhil Gautam</span>
								<span class="caption">Web</span>
							</div>
							<div className="item">
								<img src={GS} alt="Garvit Saini" className="avatar" />
								<span class="caption">Garvit Saini</span>
								<span class="caption">Big Data</span>
							</div>
							<div className="item">
								<img src={SN} alt="Sahil Nare" className="avatar" />
								<span class="caption">Sahil Nare</span>
								<span class="caption">Game Dev</span>
							</div>
							<div className="item">
								<img src={AS} alt="Avi Saini" className="avatar" />
								<span class="caption">Avi Saini</span>
								<span class="caption">Java Dev</span>
							</div>
							<div className="item">
								<img src={ST} alt="Sejal Tajane" className="avatar" />
								<span class="caption">Sejal Tajane</span>
								<span class="caption">Backend</span>
							</div>
							<div className="item">
								<img src={PP} alt="Prateek Pravanjan" className="avatar" />
								<span class="caption">Prateek</span>
								<span class="caption">CyberSecurity</span>
							</div>
							<div className="item">
								<img src={AD} alt="Aditya Datta" className="avatar" />
								<span class="caption">Aditya Datta</span>
								<span class="caption">Web</span>
							</div>
							<div className="item">
								<img src={MS} alt="Meet Soni" className="avatar" />
								<span class="caption">Meet Soni</span>
								<span class="caption">ML</span>
							</div>
							<div className="item">
								<img src={A} alt="Angad" className="avatar" />
								<span class="caption">Angad</span>
								<span class="caption">ML</span>
							</div>
						</TimelineItem>
						<TimelineItem
							key="002"
							dateText="2K19-2K20"
							style={{ color: "#fa4335" }}
							dateInnerStyle={{ background: "#fa4355" }}
						>
							<div className="item">
								<img src={KS} alt="Kshitij Suri" className="avatar" />
								<span className="caption">Kshitij Suri</span>
								<span class="caption">DSC Lead</span>
							</div>
							<div className="item">
								<img src={DS} alt="Divyam Srivastava" className="avatar" />
								<span class="caption">
									Divyam
									<br />
									Srivastava
								</span>
								<span class="caption">ML</span>
							</div>
							<div className="item">
								<img src={SD} alt="Sarvesh Dubey" className="avatar" />
								<span class="caption">
									Sarvesh
									<br />
									Dubey
								</span>
								<span class="caption">ML</span>
							</div>
							<div className="item">
								<img src={RS} alt="Rishabh Sharma" className="avatar" />
								<span class="caption">
									Rishabh
									<br />
									Sharma
								</span>
								<span class="caption">Developer</span>
							</div>
							<div className="item">
								<img src={IH} alt="Insiyah Hajoori" className="avatar" />
								<span class="caption">Insiyah Hajoori</span>
								<span class="caption">ML</span>
							</div>
							<div className="item">
								<img src={HB} alt="Harshwardhan Bhangale" className="avatar" />
								<span class="caption">Harshwardhan</span>
								<span class="caption">IoT</span>
							</div>
							<div className="item">
								<img src={PT} alt="Pritesh Tripathi" className="avatar" />
								<span class="caption">Pritesh Tripathi</span>
								<span class="caption">Web</span>
							</div>
							<div className="item">
								<img src={PS} alt="Prakash Saini" className="avatar" />
								<span class="caption">Prakash Saini</span>
								<span class="caption">IoT</span>
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
