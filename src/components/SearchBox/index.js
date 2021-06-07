import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './style.scss';

const SearchBox = (props) => {
	return (
		<div className="search-container">
			<input
				className="search expandright"
				onChange={(event) => props.setSearchValue(event.target.value)}
				value={props.value}
				id="searchleft"
				type="search"
				placeholder="Títulos, gêneros e gente"
			></input>
			<label className="button searchbutton" for="searchleft">
				<a className="searchbutton">
					<SearchIcon className="mglass" />
				</a>
			</label>
		</div>
	);
};

export default SearchBox;
