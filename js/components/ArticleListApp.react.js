
var React = require('react');
var ArticleStore=require("../stores/ArticleStore");
var ArticleListActions=require("../actions/ArticleListActions");
var ArticleList=require("../components/ArticleList.react");

var ArticleListApp = React.createClass({
	keyword:"",
	page:1,
	render : function(){

		return (
			<div>
				<div className="m-searchbox">
					<h1>Search </h1>
					<input type="text" onChange={this.searchArticle}/>
				</div>
				<input type="button" value="Load More" className="btn btn-default m-loadmore" onClick={this.loadMore} />
				<ArticleList items={this.state.items}/>
			</div>
		)
	},
	getInitialState: function(){

		return { 
			items:[]
		 }
	},
	loadMore:function(){
		this.page++;
		ArticleListActions.getArticleByKeyword(this.page, this.keyword);
	},
	searchArticle: function(event){
		var keyword=event.target.value.toLowerCase();

		this.keyword=keyword;
		ArticleListActions.getArticleByKeyword(this.page, keyword);
	},
	componentDidMount: function(){
		ArticleStore.addChangeListener(this._onChange);

		ArticleListActions.getArticleByKeyword(this.page, "");
	},
	componentWillUnmount:function(){
		ArticleStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		/*
			Event handler for any changes with the data/operation that has been completed
		*/

		this.setState({
			items:ArticleStore.getAll()
		});
	},
});

module.exports=ArticleListApp;