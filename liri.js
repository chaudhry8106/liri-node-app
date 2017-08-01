var key = require("./keys.js");

console.log(key);

var params = {screen_name: 'nodejs'};
twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    // console.log(error);
  };
//   var tweets = JSON.parse(tweets);
//   console.log(tweets);

var response = JSON.parse(response.body);
//   console.log(response);

});