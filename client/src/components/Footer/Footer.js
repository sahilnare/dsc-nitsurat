import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import "./Footer.css";


class Footer extends Component {
	render() {
		return (
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6">
							<h6>About</h6>
							<p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.
							</p>
						</div>
                        <div className="col-xs-3 col-sm-3 col-md-3"></div>
						<div className="col-xs-3 col-sm-3 col-md-3">
							<h6>Explore</h6>
							<ul className="footer-links">
								<li>
									<a href="/about">About Us</a>
								</li>
								<li>
									<a href="/contact">Contact Us</a>
								</li>
								<li>
									<a href="/blog">Blog</a>
								</li>
								<li>
									<a href="/team">Teams</a>
								</li>
								<li>
									<a href="/contribute">Contribute</a>
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
									<a className="facebook" href="https://www.facebook.com/dscnitsurat/" target="_blank">
										<FaFacebookF />
									</a>
								</li>
								<li>
									<a className="twitter" href="https://twitter.com/dscnit?lang=en" target="_blank">
                                        <FaTwitter />
									</a>
								</li>
								<li>
									<a className="instagram" href="https://www.instagram.com/dsc_nitsurat/?hl=en" target="_blank">
                                        <FaInstagram />
									</a>
								</li>
                                <li>
									<a className="github" href="https://github.com/dsc-nit-surat/" target="_blank">
                                        <FaGithub />
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
