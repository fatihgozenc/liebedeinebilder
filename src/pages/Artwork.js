import React from 'react';
import useFetchSuspense from '../utils/useFetchSuspense';
import ArtworkItem from '../components/ArtworkItem'

const Artwork = (props) => {

	const data = useFetchSuspense(
		"wordpress/wp-json/ldb/v1/posts", { query: {} }
	);

	return (
		<section className="artwork">
			<ArtworkItem data={data} routeSlug={props.match.params.slug} />
			{/* <ArtworkItem /> */}
			this is: {props.match.params.slug}
		</section>
	)
};

export default Artwork;