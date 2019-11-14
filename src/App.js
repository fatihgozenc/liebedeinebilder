import React, { Suspense } from "react";
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import Loading from './components/Loading';

import './scss/main.scss';
const LoadingData = () => <Loading />

const App = () => {

	const { location } = React.useContext(__RouterContext);
	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0, position: `absolute`, transform: `translateY(2%)` },
		enter: { opacity: 1, position: `initial`, transform: `translateY(0)` },
		leave: { opacity: 0, position: `absolute`, transform: `translateY(2%)` }
	})


	return (
		<>
			<Suspense fallback={<LoadingData />}>
				<Layout>
					{transitions.map(({ item, props, key }) => (
						<animated.div className="transition_container" key={key} style={props}>
							<Switch location={item}>
								<Route exact path="/" component={Home} />
								<Route path="/:slug" component={Artwork} />
								{/* <Route path="/post/:slug" component={ Post } />
							<Route path="/search/:term" component={ Search } /> */}
								{/* <Route component={ NotFound } />  */}
							</Switch>
						</animated.div>
					))}
				</Layout>
			</Suspense>
		</>
	);
}

export default App;