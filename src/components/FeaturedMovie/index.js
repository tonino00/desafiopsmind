import React from 'react';
import './style.css';

const FeaturedMovie = ({ item }) => {
	let firstDate = new Date(item.release_date);
	let genres = [];
	for (let i in item.genres) {
		genres.push(item.genres[i].name);
	}

	// let description = item.overview;
	// if (description.length >= 200) {
	// 	description = description.substring(0, 200) + '...';
	// }
	return (
		<section
			className="featured"
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
			}}
		>
			<div className="featured__vertical">
				<div className="featured__horizontal">
					<div className="featured__name">{item.original_name}</div>
					<div className="featured__info">
						<div className="featured__points">
							{item.vote_average} Pontuação
						</div>
						<div className="featured__year">{firstDate.getFullYear()}</div>
					</div>
					<div className="featured__description">{item.overview}</div>
					<div className="featured__buttons">
						<a className="featured__bWatch" href="">
							► Assistir
						</a>
						<a className="featured__bRecord" href="">
							+ Minha Lista
						</a>
					</div>
					<div className="featured__genres">
						<strong>Genres:</strong> {genres.join(' , ')}
					</div>
				</div>
			</div>
		</section>
	);
};
export default FeaturedMovie;
