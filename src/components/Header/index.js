import React from 'react';
import './style.css';

const Header = ({ effect }) => {
	return (
		<header className={effect ? 'effect' : ''}>
			<div className="header__logo">
				<a>
					<img
						src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
						alt="logo"
					/>
				</a>
			</div>
			<div className="header__user">
				<a>
					<img
						src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
						alt="user"
					/>
				</a>
			</div>
		</header>
	);
};

export default Header;
