import React from 'react';
import useFetchSuspense from '../utils/useFetchSuspense';

const LoopingGallery = () => {
	const data = useFetchSuspense(
		"wordpress/wp-json/ldb/v1/posts", { query: {} }
	);

	return (
		<ul>{data.map(route => (
			<li key={route.id}>{route.slug}</li>
		))}</ul>
	)
};

export default LoopingGallery;