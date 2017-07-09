import React from "react";
import ReactDOM,{rander} from "react-dom";
import {
	App,
	Index,
	About,
	List,
	Detail,
	Index1
} from './components/productBox';

import {
	Router,
	Route,
	hashHistory,
	browserHistory,
	IndexRoute

} from 'react-router';
import './less/main.less'
let routers = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}></IndexRoute>
			<Route path="index" component={Index}>
				<Route path="i1" component={Index1}></Route>
			</Route>
			<Route path="about" component={About}></Route>
			<Route path="list" component={List}></Route>
			<Route path="detail/:id" component={Detail}></Route>
		</Route>
	</Router>
)
ReactDOM.render(
	routers,
	document.querySelector("#app")
)
