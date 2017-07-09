import React,{Component} from 'react';
import {Router,Route,Link,hashHistory} from 'react-router';

require('es6-promise').polyfill();
require('isomorphic-fetch');

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
			<div>
				首页
				<div>{this.props.children}</div>
			</div>

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
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:"",
	  	url:'https://offline-news-api.herokuapp.com/stories'
	  };
	}
	componentDidMount() {
		var me = this;
		fetch(this.state.url).then(function(result){
			if(result.status>=400){
				throw new Error("请求错误")
			}
			return result.json();
		}).then(function(data){
			me.setState({list:data})

		})
	  
	}
	render(){
		document.title="列表页";
		var me = this;
		// console.log(this.state.List)
		var listStr = me.state.list==""?(<div>加载中</div>):(
				<div>
					<ul className="listWamp">
					{
						me.state.list.map(function(item,i){
							return (
								<li key={i}>
									<h2>{item.title}</h2>
			
									<div className="body" dangerouslySetInnerHTML={{__html: item.body}}/>
										
								</li>
							)
						})	
					}
					</ul>
				</div>
			)

		return (

			<div>{listStr}</div>
		)
	}
}
class Detail extends Component{
	render(){
		return (
			<div>详情{this.props.params.id} {this.props.location.query.ab}</div>
		)
	}
}
class Index1 extends Component {
	render(){
		return (
			<div>i1</div>
		)
	}
}
export {App,Index,About,List,Detail,Index1}
