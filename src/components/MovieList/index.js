import React from 'react';
import './style.css';

const MovieList = (props) => {
	return (
		<div className="listRow">
			<div className="listRow__area">
				<div className="listRow__list">
					{props.movies.map((movie, key) => (
						<div className="listRow__item" key={key}>
							<img
								src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
								alt={movie.original_title}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
