var React = require('react');


var ArticleList = React.createClass({
	render:function(){
		return (
			<ul>
			{
				this.props.items.map(function(item){
					return (

							<div className="col-sm-4 col-md-4 col-lg-4">
								<article className="m-book">
									<img src={'img/' + item.image} alt="{item.image}" className="cover"/>
									<div className="content">
										<h1>{ item.title }</h1>
										<h2>By { item.author }</h2>
									</div>
									<div className="action">
										<a href="#">READ</a>
									</div>
								</article>
							</div>
						)
				})
			}
			</ul>
		)
	}
});

module.exports=ArticleList;