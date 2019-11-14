import React from 'react';
import Header from './Header';
import Section from './Section'
import Footer from './Footer';
import useFetchSuspense from '../utils/useFetchSuspense';

const Layout = (props) => {

	const data = useFetchSuspense(
		"wordpress/wp-json/ldb/v1/main", { query: {} }
	);

	return (
		<>
			<Header data={data} />
			<section className="layout">
				{props.children}
			</section>
			<Section data={data} name="personen" />
			<Section data={data} name="portfolio" />
			<Section data={data} name="agentur" />
			<Footer data={data} />
		</>
	)
}

export default Layout;