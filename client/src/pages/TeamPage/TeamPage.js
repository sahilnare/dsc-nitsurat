import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import TeamBackground from "../../img/gif/team.webm";

import AJ from "../../img/avatar/2k20-2k21/aj.webp";
import NKG from "../../img/avatar/2k20-2k21/nkg.webp";
import GS from "../../img/avatar/2k20-2k21/gs.webp";
import SN from "../../img/avatar/2k20-2k21/sn.webp";
import AS from "../../img/avatar/2k20-2k21/as.webp";
import ST from "../../img/avatar/2k20-2k21/st.webp";
import PP from "../../img/avatar/2k20-2k21/pp.webp";
import AD from "../../img/avatar/2k20-2k21/ad.webp";
import MS from "../../img/avatar/2k20-2k21/ms.webp";
import A from "../../img/avatar/2k20-2k21/a.webp";

import KS from "../../img/avatar/2k19-2k20/ks.webp";
import DS from "../../img/avatar/2k19-2k20/ds.webp";
import SD from "../../img/avatar/2k19-2k20/sd.webp";
import RS from "../../img/avatar/2k19-2k20/rs.webp";
import IH from "../../img/avatar/2k19-2k20/ih.webp";
import HB from "../../img/avatar/2k19-2k20/hb.webp";
import PT from "../../img/avatar/2k19-2k20/pt.webp";
import PS from "../../img/avatar/2k19-2k20/ps.webp";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./TeamPage.css";

class TeamPage extends Component {
	render() {
		return (
			<div className="TeamPage">
				<Navbars />
				<div className="description">
					<Container className="TeamImage" fluid>
						<Row style={{ width: "100%", margin: "0 auto" }}>
							<Col style={{ width: "100%" }}>
								<Jumbotron className="main-text">
									<div className="text">
										<h1 className="title"> The Team </h1>
										<h3 className="sub-title">
											{" "}
											Presenting you the board of developers & tech enthusiasts.
										</h3>
									</div>
									<div className="webm">
										<video
											autoPlay
											loop
											muted
											playsInline
											className="team-background"
											alt="team-background"
										>
											<source type="video/webm" src={TeamBackground} />
										</video>
									</div>
								</Jumbotron>
							</Col>
						</Row>
					</Container>
				</div>
				<a href="#team">
					<div className="round">
						<svg className="arrows">
							<path className="a3" d="M0 50 L16 72 L32 50"></path>
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
								<span className="caption">Blockchain</span>
							</div>
							<div className="item">
								<img src={NKG} alt="Nikhil Kumar Gautam" className="avatar" />
								<span className="caption">Nikhil Gautam</span>
								<span className="caption">Web</span>
							</div>
							<div className="item">
								<img src={GS} alt="Garvit Saini" className="avatar" />
								<span className="caption">Garvit Saini</span>
								<span className="caption">Big Data</span>
							</div>
							<div className="item">
								<img src={SN} alt="Sahil Nare" className="avatar" />
								<span className="caption">Sahil Nare</span>
								<span className="caption">Game Dev</span>
							</div>
							<div className="item">
								<img src={AS} alt="Avi Saini" className="avatar" />
								<span className="caption">Avi Saini</span>
								<span className="caption">Java Dev</span>
							</div>
							<div className="item">
								<img src={ST} alt="Sejal Tajane" className="avatar" />
								<span className="caption">Sejal Tajane</span>
								<span className="caption">Backend</span>
							</div>
							<div className="item">
								<img src={PP} alt="Prateek Pravanjan" className="avatar" />
								<span className="caption">Prateek</span>
								<span className="caption">CyberSecurity</span>
							</div>
							<div className="item">
								<img src={AD} alt="Aditya Datta" className="avatar" />
								<span className="caption">Aditya Datta</span>
								<span className="caption">Web</span>
							</div>
							<div className="item">
								<img src={MS} alt="Meet Soni" className="avatar" />
								<span className="caption">Meet Soni</span>
								<span className="caption">ML</span>
							</div>
							<div className="item">
								<img src={A} alt="Angad" className="avatar" />
								<span className="caption">Angad</span>
								<span className="caption">ML</span>
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
								<span className="caption">DSC Lead</span>
							</div>
							<div className="item">
								<img src={DS} alt="Divyam Srivastava" className="avatar" />
								<span className="caption">
									Divyam
									<br />
									Srivastava
								</span>
								<span className="caption">ML</span>
							</div>
							<div className="item">
								<img src={SD} alt="Sarvesh Dubey" className="avatar" />
								<span className="caption">
									Sarvesh
									<br />
									Dubey
								</span>
								<span className="caption">ML</span>
							</div>
							<div className="item">
								<img src={RS} alt="Rishabh Sharma" className="avatar" />
								<span className="caption">
									Rishabh
									<br />
									Sharma
								</span>
								<span className="caption">ML</span>
							</div>
							<div className="item">
								<img src={IH} alt="Insiyah Hajoori" className="avatar" />
								<span className="caption">Insiyah Hajoori</span>
								<span className="caption">ML</span>
							</div>
							<div className="item">
								<img src={HB} alt="Harshwardhan Bhangale" className="avatar" />
								<span className="caption">Harshwardhan</span>
								<span className="caption">IoT</span>
							</div>
							<div className="item">
								<img src={PT} alt="Pritesh Tripathi" className="avatar" />
								<span className="caption">Pritesh Tripathi</span>
								<span className="caption">Web</span>
							</div>
							<div className="item">
								<img src={PS} alt="Prakash Saini" className="avatar" />
								<span className="caption">Prakash Saini</span>
								<span className="caption">IoT</span>
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
