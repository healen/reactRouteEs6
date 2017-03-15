import React,{Component} from 'react';
import {Router,Route,Link,hashHistory} from 'react-router';
//es5
class App extends Component {
	render(){
		return (
			<div>
				<header>
					<h1>React Demo</h1>
				</header>
				<Nav></Nav>
				<div className='contains'>{this.props.children}</div>
			</div>
		)
	}
}

class Nav extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	activeClass:'active',
	  	navList:[
	  		{to:'/index',title:'首页'},
	  		{to:'/about',title:'关于我们'},
	  		{to:'/list',title:'列表'},
	  	]
	  };
	}
	render(){
		var me = this;
		return (
			<ul className="meun">
				{
					this.state.navList.map(function(item,i){
						return (
							<li key={i}><Link to={item.to} activeClassName={me.state.activeClass}>{item.title}</Link></li>
						)

					})
				}
			</ul>
		)

	}
	
}
class Index extends Component {
	render(){
		document.title='首页';
		return (
			<div>首页</div>
		)
	}
}
class About extends Component {
	render(){
		document.title='关于页面';
		return (
			<div>关于页面</div>
		)
	}
}
class List extends Component {

	render(){
		document.title="列表页";
		return (
			<div>列表</div>
		)
	}
}
export {App,Index,About,List}
