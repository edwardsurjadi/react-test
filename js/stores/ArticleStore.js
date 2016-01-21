
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ArticleConstants = require('../constants/ArticleConstants');
var $=require("jquery");

var ArticleStore=assign({}, EventEmitter.prototype, {

	items:[],
	initialItems:null,

	getAll: function(){
		return this.items;
	},
	getByKeyword: function(page, keyword){
		var self=this;

		if(self.initialItems==undefined){
			
			//Load from the file for the first time only, then filter by keyword and page
			$.get("./article.json", function(result){
				self.initialItems=result;
				self.filterByKeyword(page, "");
			});
		}
		else{
			//Directly filter the data as the data has been previously downloaded
			self.filterByKeyword(page, keyword);
		}
	},
	filterByKeyword:function(page, keyword){

		var pageSize=2;
		var itemCount=pageSize * page;
		this.items=this.initialItems.filter(function(item){
			return item.title.toLowerCase().indexOf(keyword)>=0;
		});	

		//take only the desired page. e.g. if page 2, and pagesize is 2, take the first 4 elements only
		this.items=this.items.slice(0, itemCount);

		this.emitChange();	
	},
	emitChange:function(){
		this.emit(ArticleConstants.ARTICLE_GET_ALL);
	},
	addChangeListener:function(callback){
		this.on(ArticleConstants.ARTICLE_GET_ALL, callback);
	},
	removeChangeListener:function(callback){
		this.removeListener(ArticleConstants.ARTICLE_GET_ALL, callback);
	}	
});

AppDispatcher.register(function(payload){
	
	switch(payload.eventName){
		case ArticleConstants.ARTICLE_GET_ALL:
			//query database

			console.log("getByKeyword " + payload.page + "  " + payload.keyword);

			ArticleStore.getByKeyword(payload.page, payload.keyword);
			ArticleStore.emitChange();
			break;
	}
	return true;
});

module.exports=ArticleStore;