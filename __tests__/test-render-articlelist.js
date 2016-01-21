/*
	Testing Initial Load, by passing page 1 to the ArticleStore
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
			expect(items.length).toBe(2);		
		});
	}

	ArticleStore.addChangeListener(callback);
	ArticleStore.url="http://localhost:8080/article.json";	
	ArticleListActions.getArticleByKeyword(1,"");



	/* Mock AppDispatcher
	var callback;
	beforeEach(function(){
		callback=AppDispatcher.register.mock.calls[0][0];
	});

	it("must have 2 items", function(){
		callback({eventName:ArticleConstants.ARTICLE_GET_ALL,
			keyword:"",
			page:1
		});
		var items=ArticleStore.getAll();
		
		expect(items.length).toBe(2);		
	});
*/

});

//var React=require('react');
/*var ArticleListApp=require("../js/components/ArticleListApp.react.js");
var TestUtils=React.addons.TestUtils;

console.log("a");

describe("ArticleListApp", function(){
	
	var ArticleListElement=TestUtils.renderIntoDocument(<ArticleListApp/>);

	var items=TestUtils.scryRenderedDOMComponentsWithTag(ArticleListElement, "div");

console.log(items.length.count);

	it("render at least 1 item", function(){
		expect(items.length).toEqual(1);
	});
});*/