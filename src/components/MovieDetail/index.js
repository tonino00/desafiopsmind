import React, { useState, useEffect } from 'react';
import './style.scss';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const MovieDetail = (props) => {
	let firstDate = new Date(props.location.FirstDate);

	const [favoritesMovies, setFavoriteMovies] = useState([]);

	const Addfavorite = (props) => {
		setFavoriteMovies(favoritesMovies.concat(props));
	};

	const removeFavorite = (props) => {
		setFavoriteMovies(favoritesMovies.filter((movie) => movie !== props));
	};

	return (
		<div className="movie_card" id="bright">
			<div className="info_section">
				<div className="movie_header">
					<img
						className="locandina"
						src={`https://image.tmdb.org/t/p/original${props.location.MoviePoster}`}
					/>
					<h1>{props.location.MovieTitle}</h1>

					<h4>{firstDate.getFullYear()}</h4>
					<span className="minutes">{props.location.Vote}</span>
					<p className="type">Popularidade</p>
				</div>
				<div className="movie_desc">
					<p className="text">{props.location.Overview}</p>
				</div>
				<div className="movie_social">
					<ul>
						<li onClick={() => Addfavorite(props)}>
							<AddCircleOutlineIcon className="material-icons"></AddCircleOutlineIcon>
						</li>
						<li onClick={() => removeFavorite(props)}>
							<RemoveCircleIcon className="material-icons"></RemoveCircleIcon>
						</li>
					</ul>
				</div>
			</div>
			<div
				className="blur_back"
				style={{
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundImage: `url(https://image.tmdb.org/t/p/original${props.location.MovieBackdrop})`,
				}}
			></div>
			<div className="favoritesRow">
				<h2>Meus Favoritos</h2>
				<div className="favoritesRow__area">
					<div className="favoritesRow__list">
						{favoritesMovies.map((movie) => (
							<div className="favoritesRow__item" key={movie.MovieId}>
								<img
									src={`https://image.tmdb.org/t/p/w300${movie.location.MoviePoster}`}
									alt=""
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
