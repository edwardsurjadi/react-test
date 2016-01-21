/*
	Testing Load More functionality by passing page 2 to the ArticleStore
*/
jest.dontMock("../js/stores/ArticleStore");
jest.dontMock("../js/dispatcher/AppDispatcher");
jest.dontMock("../js/constants/ArticleConstants");
jest.dontMock("../js/actions/ArticleListActions");

describe("ArticleListStore", function(){

	var ArticleStore=require("../js/stores/ArticleStore");
	var AppDispatcher=require('../js/dispatcher/AppDispatcher');
	var ArticleConstants=require('../js/constants/ArticleConstants');
	var ArticleListActions=require('../js/actions/ArticleListActions');

	var callback=function(){

		var items=ArticleStore.getAll();

		it("must have 2 items initially", function(){
			var items=ArticleStore.getAll();			
			expect(items.length).toBe(4);		
		});
	}

	ArticleStore.addChangeListener(callback);
	ArticleStore.url="http://localhost:8080/article.json";	
	ArticleListActions.getArticleByKeyword(2,"");

});
