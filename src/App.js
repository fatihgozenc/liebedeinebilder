import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import './scss/main.scss';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/artwork/:slug" component={Artwork} />
				{/* <Route path="/post/:slug" component={ Post } />
							<Route path="/search/:term" component={ Search } /> */}
				{/* <Route component={ NotFound } />  */}
			</Switch>
		</>
	);
}

export default App;