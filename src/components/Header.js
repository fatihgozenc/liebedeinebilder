import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';

const Header = (props) => {
	console.log(props.data)
	return (
		<header>
			<nav className="header">
				<Link to={`/`}>
					<Logo />
				</Link>
				<div className="break" />
				<Icon name="people" size="24" />
				<Icon name="portfolio" size="24" />
				<Icon name="home" size="24" />
			</nav>
		</header>
	)
}

export default Header;