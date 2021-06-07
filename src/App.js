import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Error from './components/Error';
import './main.css';

const App = () => {
	return (
		<main>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/detalhes" component={MovieDetail} />
				<Route component={Error} />
			</Switch>
		</main>
	);
};

export default App;
