//var reddit = require('../data.json');

// Write your solutions below

// 1. forEach - console.log all post titles
reddit.data.children.forEach(function(item) {
	console.log(item.data.title);
})

// 2. map - Print an array of permalinks, append http://reddit.com to each so that they contain full http:// path to reddit
var links = [];
reddit.data.children.forEach(function(item, index) {
	links[index] = item.data.permalink;
})

links = links.map(function(item, index){
	return "http://www.reddit.com" + item;
})
console.log(links);

// 3. filter - Filter the posts that contain actual text in the selftext key
var hasSelftext = reddit.data.children.filter(function(item, index) {
	if (item.data.selftext != "") {
		return true;
	} else {
		return false;
	}
});

console.log(hasSelftext);

// 4. reduce - Use reduce to obtain the sum of all the score values across all posts in the dataset

var scores = []
reddit.data.children.forEach(function(item, index) {
	scores[index] = item.data.score;
})

var sum = scores.reduce(function(total, item) {
  return total + item
});

console.log(sum);
