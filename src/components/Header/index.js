import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = ({ effect }) => {
	return (
		<header className={effect ? 'effect' : ''}>
			<div className="header__menu">
				<a>
					<img
						className="header__logo"
						src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
						alt="logo"
					/>
				</a>
				<ul className="header__tab-navigation">
					<li className="header__navigation-tab">
						<a href="" className="btn active">
							Inicio
						</a>
						<a href="" className="btn">
							Séries
						</a>
						<a href="" className="btn">
							Filmes
						</a>
						<a href="" className="btn">
							Bombando
						</a>
						<Link to="/my-list" className="btn">
							Minha lista
						</Link>
					</li>
				</ul>
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
