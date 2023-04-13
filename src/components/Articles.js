import React, { useState } from "react";
import Card from "./Card";
import "../styles/index.css";
import grilledTomatoes from "../assets/grilled-tomatoes.png";
import fruitsMealPrep from "../assets/fruits-meal-prep.png";
import postWorkoutMeal from "../assets/post-workout-meal-prep.png";
import grilledCorn from "../assets/grilled-corn.png";
import crunchWrapSupreme from "../assets/crunch-wrap-supreme.png";
import broccoliCheeseSoup from "../assets/broccoli-cheese-soup.png";
import disabledPrev from "../assets/disabledPrev.png";
import enabledPrev from "../assets/enabledPrev.png";
import enabledForward from "../assets/enabledforward.png";
import disabledForward from "../assets/disabledForward.png";

const Articles = () => {
	const [page, setPage] = useState(1);
	let totalPage = 2;
	const handleOnNextPage = () => {
		setPage(2);
	};
	const handleOnPrevBtn = () => {
		setPage(1);
	};
	return (
		<div className='articles-section'>
			<h1 className='article-heading'>Latest Articles</h1>
			{page === 1 ? (
				<article className='cards-container'>
					<Card
						cardImage={grilledTomatoes}
						cardName='Grilled Tomatoes at Home'
					/>
					<Card
						cardImage={fruitsMealPrep}
						cardName='Snacks for Travel'
					/>
					<Card
						cardImage={postWorkoutMeal}
						cardName='Post-workout Recipes'
					/>
				</article>
			) : (
				<article className='cards-container'>
					<Card
						cardImage={grilledCorn}
						cardName='How To Grill Corn'
					/>
					<Card
						cardImage={crunchWrapSupreme}
						cardName='Crunchwrap Supreme'
					/>
					<Card
						cardImage={broccoliCheeseSoup}
						cardName='Broccoli Cheese Soup'
					/>
				</article>
			)}

			<div className='pagination'>
				<button className='pagination-prev-forward-btn'>
					<img
						src={page === 1 ? disabledPrev : enabledPrev}
						alt=''
						className='prev-forward-img'
						onClick={handleOnPrevBtn}
					/>
				</button>
				<p>{page + "/" + totalPage}</p>
				<button
					className='pagination-prev-forward-btn'
					onClick={handleOnNextPage}>
					<img
						src={page === 1 ? enabledForward : disabledForward}
						alt=''
						className='prev-forward-img'
					/>
				</button>
			</div>
		</div>
	);
};

export default Articles;
