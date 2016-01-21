var AppDispatcher=require('../dispatcher/AppDispatcher');
var ArticleConstants=require('../constants/ArticleConstants');

var ArticleListActions={

	getArticleByKeyword:function(page, keyword){
		AppDispatcher.dispatch({
			eventName:ArticleConstants.ARTICLE_GET_ALL,
			keyword:keyword,
			page:page
		});		
	}
};

module.exports=ArticleListActions;