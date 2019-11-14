import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = (props) => {
	return (
		<footer className="footer">
			<hr />
			<Link to={`/`}>
				<Logo />
			</Link>
			its'footer
			<div className="break" />
		</footer>
	)
}

export default Footer;