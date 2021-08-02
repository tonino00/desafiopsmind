import React, { useState, useEffect } from 'react';
import './style.scss';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
// import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { Link } from 'react-router-dom';

const MovieDetail = (props) => {
	let firstDate = new Date(props.location.FirstDate);

	const [favoritesMovies, setFavoriteMovies] = useState([]);
	const [isLoading, setisLoading] = useState(true);

	const Addfavorite = (props) => {
		setFavoriteMovies([...favoritesMovies, props]);
	};

	const removeFavorite = (props) => {
		setFavoriteMovies(favoritesMovies.filter((movie) => movie !== props));
	};

	useEffect(() => {
		const favoritesMovies = JSON.parse(localStorage.getItem('favoritesMovies'));
		if (favoritesMovies) {
			setFavoriteMovies(favoritesMovies);
		}
	}, []);

	useEffect(() => {
		setisLoading(false);
		localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
	}, [favoritesMovies]);

	return (
		<div className="card mb-3">
			<img
				src={`https://image.tmdb.org/t/p/original${props.location.MovieBackdrop}`}
				className="card-img-top"
				alt="..."
			></img>
			<div className="card-body">
				<div className="menu-button">
					<ul className="menu-icons-left">
						<li>
							<PlayCircleFilledWhiteIcon className="material-icons"></PlayCircleFilledWhiteIcon>
						</li>
						<li onClick={() => Addfavorite()}>
							<AddCircleOutlineIcon className="material-icons"></AddCircleOutlineIcon>
						</li>
						<li>
							<ThumbUpAltIcon className="material-icons"></ThumbUpAltIcon>
						</li>
						<li>
							<ThumbDownIcon className="material-icons"></ThumbDownIcon>
						</li>
					</ul>
					<ul className="menu-icons-right">
						<li>
							<ArrowDropDownCircleIcon className="material-icons"></ArrowDropDownCircleIcon>
						</li>
					</ul>
				</div>
				<h1 className="card-title">{props.location.MovieTitle}</h1>
				<p className="card-text">
					<small className="text-muted left">
						{props.location.Vote} Pontuação
					</small>
					<small className="text-muted">{firstDate.getFullYear()}</small>
				</p>
				<p className="card-text">{props.location.Overview}</p>
			</div>
			{isLoading && (
				<div className="loading">
					<img
						src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"
						alt="loading"
					/>
				</div>
			)}
		</div>
	);
};

export default MovieDetail;
