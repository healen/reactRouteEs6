import React from "react";
import ReactDOM,{rander} from "react-dom";
import {
	App,
	Index,
	About,
	List,
	Detail
} from './components/productBox';

import {Router,Route,hashHistory,browserHistory} from 'react-router';
import './less/main.less'
let routers = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/index" component={Index}></Route>
			<Route path="/about" component={About}></Route>
			<Route path="/list" component={List}></Route>
			<Route path="/detail/:id" component={Detail}></Route>
		</Route>
	</Router>
)
ReactDOM.render(
	routers,
	document.querySelector("#app")
)
