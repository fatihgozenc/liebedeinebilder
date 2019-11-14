import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = (props) => {
	console.log(props.data)
	return (
		<header>
			<nav className="header">
				<Link to={`/`}>
					<Logo />
				</Link>
				<div className="break" />
			</nav>
		</header>
	)
}

export default Header;