import React from "react";
import ReactDOM,{rander} from "react-dom";
import {
	App,
	Index,
	About,
	List
} from './components/productBox';

import {Router,Route,hashHistory} from 'react-router';
import './less/main.less'
let routers = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/index" component={Index}></Route>
			<Route path="/about" component={About}></Route>
			<Route path="/list" component={List}></Route>
		</Route>
	</Router>
)
ReactDOM.render(
	routers,
	document.querySelector("#app")
)
