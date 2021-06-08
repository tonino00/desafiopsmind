import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList';
import FeaturedMovie from '../FeaturedMovie';
import Header from '../Header';
import SearchBox from '../SearchBox';

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [featuredData, setFeaturedData] = useState([]);
	const [effectBlack, setEffectBlack] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=9b1cfbac83440d076d302464998ca7d4&language=pt-BR&query=marvel&page=1&include_adult=false`;

		const response = await fetch(url);
		const responseJson = await response.json();

		setMovies(responseJson.results);
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	useEffect(() => {
		const scrollListiner = () => {
			if (window.scrollY > 10) {
				setEffectBlack(true);
			} else {
				setEffectBlack(false);
			}
		};

		window.addEventListener('scroll', scrollListiner);
		return () => {
			window.removeEventListener('scroll', scrollListiner);
		};
	}, []);

	const getMovieFeature = async () => {
		const url = `https://api.themoviedb.org/3/movie/557?api_key=9b1cfbac83440d076d302464998ca7d4&language=pt-BR`;

		const response = await fetch(url);
		const responseJson = await response.json();

		setFeaturedData(responseJson);
	};

	useEffect(() => {
		getMovieFeature();
	}, []);

	const getMovieSearch = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=9b1cfbac83440d076d302464998ca7d4&language=pt-BR&query=${searchValue}&page=1&include_adult=false`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieSearch(searchValue);
	}, [searchValue]);

	return (
		<div className="app">
			<Header effect={effectBlack} />
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			{featuredData && <FeaturedMovie item={featuredData} />}
			<div className="app__list">
				<MovieList movies={movies} />
			</div>
			{movies.length <= 0 && (
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

export default Home;
