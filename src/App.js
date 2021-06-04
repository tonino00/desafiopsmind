import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=9b1cfbac83440d076d302464998ca7d4&language=pt-BR&query=marvel&page=1&include_adult=false`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
		console.log(responseJson);
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className="container-fluid movie-app">
			<div className="row">
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
