import React from "react";
import Card from "./Card";
import "../styles/index.css";
import grilledTomatoes from "../assets/grilled-tomatoes.png";
import fruitsMealPrep from "../assets/fruits-meal-prep.png";
import postWorkoutMeal from "../assets/post-workout-meal-prep.png";
import grilledCorn from "../assets/grilled-corn.png";
import crunchWrapSupreme from "../assets/crunch-wrap-supreme.png";
import broccoliCheeseSoup from "../assets/broccoli-cheese-soup.png";
import prevpage from "../assets/prevpage.png";
import forwardpage from "../assets/forwardpage.png";

const Articles = () => {
	return (
		<div className='articles-section'>
			<h1 className='article-heading'>Latest Articles</h1>

			<article className='cards-container'>
				<Card
					cardImage={grilledTomatoes}
					cardName='Grilled Tomatoes at Home'
				/>
				<Card cardImage={fruitsMealPrep} cardName='Snacks for Travel' />
				<Card
					cardImage={postWorkoutMeal}
					cardName='Post-workout Recipes'
				/>
				{/* <Card cardImage={grilledCorn} cardName='How To Grill Corn' />
				<Card
					cardImage={crunchWrapSupreme}
					cardName='Crunchwrap Supreme'
				/>
				<Card
					cardImage={broccoliCheeseSoup}
					cardName='Broccoli Cheese Soup'
				/> */}
			</article>
			<div className='pagination'>
				<span className='pagination-prev-forward-btn'>
					<img src={prevpage} alt='' className='prev-forward-img' />
				</span>
				<p>1/2</p>
				<span className='pagination-prev-forward-btn'>
					<img
						src={forwardpage}
						alt=''
						className='prev-forward-img'
					/>
				</span>
			</div>
		</div>
	);
};

export default Articles;
