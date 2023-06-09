import React from "react";
import "../styles/index.css";
import AboutImg from "../assets/AboutSectionImg.png";

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-section'>
				<img src={AboutImg} alt='' className='about-img' />
				<div className='about-content-section'>
					<h1 className='about-us-heading'>About Us</h1>
					<p className='about-us-text'>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. t has
						survived not only five centuries.
					</p>
					<button className='about-read-more-btn'>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default About;
