import React from 'react';

const Seo = (props) => {

	switch (props.name) {
		case 'h1':
			return (
				<h1 className="seo">{props.title}</h1>
			);
		case 'h2':
			return (
				<h2 className="seo">{props.title}</h2>
			);
		case 'h3':
			return (
				<h3 className="seo">{props.title}</h3>
			);
		case 'h4':
			return (
				<h4 className="seo">{props.title}</h4>
			);
		case 'h5':
			return (
				<h5 className="seo">{props.title}</h5>
			);
		default:
			return null;
	}
}

export default Seo;