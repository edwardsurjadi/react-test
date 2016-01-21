# React Test

- users can see a list of articles
- users can press a button to load more articles

## Instructions

- Fork this repository. Create a feature branch to do your work. When done email us a link to your branch.
- There is no design, feel free to make the list as aesthetically pleasing as you like as long as the main requirements are met.
- If there are any questions, feel free to record any assumptions made.

## Details

- use React for rendering the HTML list and button ui
- use the Flux data flow pattern
- code must be unit tested, adhere to SOLID principles and be self documenting
- code may be written using ES2016/ES2017, enable any options you like in Babel
- use local JSON files as pages of articles to display
- all articles have unique ids, titles and images. one article is:
```js
{
    id: 1,
    title: "article title 1",
    image: "http://placehold.it/300x250&text=image 1"
}
```
## Assumptions by Edward
- start page : index.html
- initial items load = 2 : upon first page load it will load 2 items, when user clicks load more it will load additional 2 items to the UI
- components : ArticleListApp and ArticleList
- actions : ArticleListActions
- constants : ArticleListConstants
- dispatcher : AppDispatcher
- stores : ArticleStore
- list of articles are fetched from “article.json”
- jest is used for unit testing