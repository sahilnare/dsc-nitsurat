import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footer/Footer";
import Logo from "../../img/dsc.jpg";
import ReactTypingEffect from "react-typing-effect";

import "./LandingPage.css";

class LandingPage extends Component {
	// textLoop = () => {
	// 	let textArray = ["develop.", "innovate.", "connect.", "build.", "grow."];
	// 	let minNumber = 0;
	// 	let maxNumber = 5;
	//
	// 	setInterval(() => {
	// 		if (minNumber < maxNumber) {
	// 			document.getElementsByClassName("highlight")[0].innerHTML = textArray[minNumber];
	// 			++minNumber;
	// 		} else if (minNumber === maxNumber) {
	// 			minNumber = 0;
	// 			document.getElementsByClassName("highlight")[0].innerHTML = textArray[minNumber];
	// 			++minNumber;
	// 		}
	// 	}, 4000);
	// };

	render() {
		return (
			<div className="LandingPage">
				<Navbars />
				<div className="dsc-body">
					<img src={Logo} className="image" alt="dsc-nitsurat" />
					<h1 className="context">
						Here, you can <br />
						{/*<code className="highlight">{this.textLoop()}</code>*/}
						<ReactTypingEffect
							className="highlight"
							text={["develop.", "innovate.", "connect.", "build.", "grow."]}
							eraseDelay={1000}
							typingDelay={2000}
							speed={100}
						/>
					</h1>
				</div>
				<Footer />
			</div>
		);
	}
}

export default LandingPage;
