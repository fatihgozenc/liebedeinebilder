import React, { Suspense } from "react";
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import Loading from './components/Loading';

import './scss/main.scss';
const LoadingData = () => <Loading />

const App = () => {

	return (
		<>
			<Suspense fallback={<LoadingData />}>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/:slug" component={Artwork} />
						{/* <Route path="/post/:slug" component={ Post } />
							<Route path="/search/:term" component={ Search } /> */}
						{/* <Route component={ NotFound } />  */}
					</Switch>
				</Layout>
			</Suspense>
		</>
	);
}

export default App;