import React from 'react';
import { Helmet } from "react-helmet";

const Layout = (props) => {
	return (
		<section className={`layout layout-${props.name}`}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{props.name}</title>
				<link rel="canonical" href={window.location} />
			</Helmet>
			{props.children}
		</section>

	)
}