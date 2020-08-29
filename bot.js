console.log('The bot is starting...');

var Twit = require('twit')
var config = require('./config')
var T = new Twit(config)

var quotes = require('./quotes.json')
var now = new Date();

tweetIt()
//					   					ms   sec  min  hrs
setInterval(tweetIt, (1000 * 60 * 60 * 24))

function tweetIt(txt) {
	// var rNr = Math.floor(Math.random() * 100)
	var quoteNr = Math.floor(Math.random() * quotes.length)

	const quote = quotes[quoteNr].quoteText
	const author = quotes[quoteNr].quoteAuthor
	var txt = '#quoteoftoday' + '\n' + quote + '\n' + author

	// Trying a post-request
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, (err, data, response) => {
		if (err) {
			console.log('Something went wrong!');
		} else {
			console.log('It worked!')
		}
	})
}

