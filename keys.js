console.log('this is loaded');

var Twitter = require ('twitter');
var params = {screen_name: "Beer_BellyFlop"};
var Spotify = require ('node-spotify-api');
var request = require ('request');

var culture = process.argv.slice(3);
var action = process.argv[2];

var client = new Twitter ({
  consumer_key: 'JQkxFDnj20ztY1GLxs4eR9sL2',
 consumer_secret: 'TMKyVDnjDX3D730ZFFNmHttm5zRku9xHRSRo4OXVkqerlU7Gjs',
 access_token_key: '910861037716590592-EVjSSJZdSWN2x5AhEPad616A4AsqXV1',
 access_token_secret: 'XjMgNq0oXebL5j4E4ekOz0A7jmDLrmfWRxjGxXMX1BYGA',
})



function Twitter(){
client.get('statuses/user_timeline/count=20', function(error, tweets, response) {
  if (!error) {
  	for (var i = 0 : i < tweets.length; i++) {}
    console.log(tweets[i}.text]);
	console.log(tweets[i}.created_at]);
  }
} else {

	console.log(error)


})                                 
};

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '180663a50b674d76916358111d62fa13',
  secret: 'e9cf1e864aab42a0a3f5259d2355bacf'
});

function song() {
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, songData) {
        if (err) {
            return console.log('Error occurred: ' + err);
        };

        var result = songData.tracks.items[0];
        
         
        console.log(result.artists[0].name); 
        console.log(result.name);
        console.log(result.album.external_urls.spotify);
        console.log(result.album.name);

    });
};
 
function movie() {
    request('http://www.omdbapi.com/?apikey=40e9cece&t=' + culture, function (error, response, movieData) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode);

    result = JSON.parse(movieData, null, 2);

            return console.log(result.Title)
            console.log(result.Year)
            console.log(result.Ratings[0].Source + " " + result.Ratings[0].Value)
            console.log(result.Ratings[1].Source + " " + result.Ratings[1].Value)
            console.log(result.Country)
            console.log(result.Language)
            console.log(result.Plot)
            console.log(result.Actors);
    });
};

exports.action = action;
exports.culture = culture;
exports.movie() = movie;
exports.song() = song;