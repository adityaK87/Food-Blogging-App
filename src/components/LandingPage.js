import React from "react";
import "../styles/index.css";
import Logo from "../assets/Logo.png";
import Vector from "../assets/Vector.png";
import Pizza from "../assets/Pizza.png";

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<div className='left-part-landing'>
				<img src={Logo} alt='' className='app-logo' />
				<h1 className='heading'>
					Discover the <b>Best</b> Food and Drinks{" "}
				</h1>
				<p className='headLine'>
					Naturally made Healthcare Products for the better care &
					support of your body.
				</p>
				<button className='btn'>
					<p>Explore Now!</p>{" "}
				</button>
			</div>
			<div className='right-part-landing'>
				<img src={Pizza} alt='' className='pizza-img' />
				<button className='get-in-touch-btn'>
					<p className='get-intouch-text-content'>Get In Touch</p>
				</button>
				<img src={Vector} alt='' className='vector-image' />
			</div>
		</div>
	);
};

export default LandingPage;
