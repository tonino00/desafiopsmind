import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import MyList from './components/MyList';
import Error from './components/Error';
import './main.css';

const App = () => {
	return (
		<main>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/detail" component={MovieDetail} />
				<Route path="/my-list" component={MyList} />
				<Route component={Error} />
			</Switch>
		</main>
	);
};

export default App;
