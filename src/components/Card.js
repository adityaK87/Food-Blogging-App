import React from "react";
import "../styles/index.css";

const Card = ({ cardImage, cardName }) => {
	return (
		<div className='card'>
			<img src={cardImage} alt='' srcset='' className='cardImage' />
			<h2 className='cardName'>{cardName}</h2>
			<p className='card-details'>
				PLorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's
				standard...
			</p>
			<button className='card-btn'>
				<p className='card-btn-text-content'>Read More</p>
			</button>
		</div>
	);
};

export default Card;
