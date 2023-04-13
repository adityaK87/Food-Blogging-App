import React from "react";
import "../styles/index.css";
import Logo from "../assets/Logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className='footer-container'>
			<img src={Logo} alt='' />
			<div className='contact-section footer-sections'>
				<h4 className='contact-us-heading'>Contact Us</h4>
				<ul>
					<li>
						Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate
						near YTM Market, XYZ-343434
					</li>
					<li>example2020@gmail.com</li>
					<li>(904) 443-0343</li>
				</ul>
			</div>
			<div className='more-section footer-sections'>
				<h4 className='contact-us-heading more'>More</h4>
				<ul>
					<li>About Us</li>
					<li>Products</li>
					<li>Career</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<div className='social-section footer-sections'>
				<h4 className='contact-us-heading social-heading'>
					Social Links{" "}
				</h4>
				<div className='social-icons'>
					<span className='social-logo instagram'>
						<AiOutlineInstagram />
					</span>
					<span className='social-logo twitter'>
						<AiOutlineTwitter />
					</span>
					<span className='social-logo facebook'>
						<FaFacebookF />
					</span>
				</div>
				<p className='copyright'>© 2022 Food Truck Example</p>
			</div>
		</footer>
	);
};

export default Footer;
