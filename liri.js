

var keys = require ('./keys.js');
console.log(keys.twitterkeys);


keys.action == "movie-this" ? keys.movie : console.log('invalid command');
keys.action == "spotify-this-song" ? keys.song : console.log('invalid command');
keys.action == "my-tweets" ? keys.song : console.log('my-tweets');