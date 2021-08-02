import React, { useState } from 'react';
import './style.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const FeaturedMovie = ({ item }) => {
	let firstDate = new Date(item.release_date);
	let genres = [];
	for (let i in item.genres) {
		genres.push(item.genres[i].name);
	}

	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

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
						<a className="featured__bWatch" onClick={onOpenModal}>
							► Assistir
						</a>
						<a className="featured__bRecord">+ Mais informações</a>
					</div>
					<div className="featured__genres">
						<strong>Gêneros:</strong> {genres.join(' , ')}
					</div>
				</div>
				<Modal open={open} onClose={onCloseModal} center>
					<div>
						<iframe
							className="featured__iframe"
							src={`https://www.youtube.com/embed/O7zvehDxttM`}
							allowfullscreen
						></iframe>
					</div>
				</Modal>
			</div>
		</section>
	);
};
export default FeaturedMovie;
