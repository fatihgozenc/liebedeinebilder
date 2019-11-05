import React, { Suspense } from 'react';
import LoopingGallery from '../components/LoopingGallery';

const LoadingData = () => <div>Loading data...</div>

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Suspense fallback={<LoadingData />}>
				<LoopingGallery />
			</Suspense>
		</div>
	)
};

export default Home;