import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import SocialLogo from "../../img/social-media.webp";
import "./Footer.css";

class Footer extends Component {
	state = {
		widthCheck: false,
	};

	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ widthCheck: window.innerWidth < 767 });
	}

	render() {
		return (
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6">
							{!this.state.widthCheck ? (
								<img src={SocialLogo} alt="social" className="social" />
							) : (
								<h6 className="quote">
									<i>
										<q>You don't need a 100 person company to develop that idea.</q>
									</i>
								</h6>
							)}
						</div>
						<div className="col-xs-3 col-sm-3 col-md-3"></div>
						<div className="explore col-xs-3 col-sm-3 col-md-3">
							<h6>Explore</h6>
							<ul className="footer-links">
								<li>
									<a href="/about">About</a>
								</li>
								<li>
									<a href="/events">Events</a>
								</li>
								<li>
									<a href="/team">Team</a>
								</li>
								<li>
									<a
										href="https://github.com/dsc-nit-surat/dsc-nitsurat/blob/master/contributing.md"
										target="_blank"
										rel="noopener noreferrer"
									>
										Contribute
									</a>
								</li>
							</ul>
						</div>
					</div>
					<hr />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-sm-6 col-xs-12">
							<p className="copyright-text">
								Copyright &copy; 2020 All Rights Reserved by
								<a href="/"> DSC NIT-SURAT </a>.
							</p>
						</div>

						<div className="col-md-4 col-sm-6 col-xs-12">
							<ul className="social-icons">
								<li>
									<a
										className="twitter"
										href="https://twitter.com/dscnit?lang=en"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaTwitter />
									</a>
								</li>
								<li>
									<a
										className="instagram"
										href="https://www.instagram.com/dsc_nitsurat/?hl=en"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaInstagram />
									</a>
								</li>
								<li>
									<a
										className="facebook"
										href="https://www.facebook.com/dscnitsurat/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaFacebookF />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
