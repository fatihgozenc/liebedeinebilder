import React from 'react';
import LoopingGallery from '../components/LoopingGallery';
import useFetchSuspense from '../utils/useFetchSuspense';

const Home = () => {

	const data = useFetchSuspense(
		"wordpress/wp-json/ldb/v1/posts", { query: {} }
	);

	return (
		<>
			<LoopingGallery data={data} />
		</>
	)
};

export default Home;