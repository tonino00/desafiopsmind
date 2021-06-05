import React, { useState } from 'react';
import './style.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieList = (props) => {
	const [scrollX, setScrollx] = useState(0);
	const handleLeftArrow = () => {
		let x = scrollX + Math.round(window.innerWidth / 2);
		if (x > 0) {
			x = 0;
		}
		setScrollx(x);
	};

	const handleRightArrow = () => {
		let x = scrollX - Math.round(window.innerWidth / 2);
		let listW = props.movies.length * 150;
		if (window.innerWidth - listW > x) {
			x = window.innerWidth - listW - 60;
		}
		setScrollx(x);
	};

	return (
		<div className="listRow">
			<div className="listRow__left" onClick={handleLeftArrow}>
				<NavigateBeforeIcon style={{ fontSize: 50 }} />
			</div>

			<div className="listRow__right" onClick={handleRightArrow}>
				<NavigateNextIcon style={{ fontSize: 50 }} />
			</div>

			<div className="listRow__area">
				<div
					className="listRow__list"
					style={{ marginLeft: scrollX, width: props.movies.length * 150 }}
				>
					{props.movies.length > 0 &&
						props.movies.map((movie, key) => (
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
